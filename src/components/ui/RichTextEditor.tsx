import React, { useRef } from 'react';
import { ContentBlock, Editor, EditorState, RichUtils, getDefaultKeyBinding } from 'draft-js';
import '../../../node_modules/draft-js/dist/Draft.css'

type Props = { editorState: EditorState, setEditorState: any }

const RichTextEditor: React.FC<Props> = ({ editorState, setEditorState }: Props) => {
    const editorRef = useRef<Editor | null>(null);

    const focus = () => {
        if (editorRef.current) {
            editorRef.current.focus();
        }
    };

    const handleKeyCommand = (command: string, editorState: EditorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            setEditorState(newState);
            return "handled";
        }
        return "not-handled";
    };

    const mapKeyToEditorCommand = (e: React.KeyboardEvent<{}>) => {
        if (e.keyCode === 9 /* TAB */) {
            const newEditorState = RichUtils.onTab(e, editorState, 4 /* maxDepth */);
            if (newEditorState !== editorState) {
                setEditorState(newEditorState);
            }
            return '';
        }
        return getDefaultKeyBinding(e);
    };

    const toggleBlockType = (blockType: string) => {
        setEditorState(RichUtils.toggleBlockType(editorState, blockType));
    };

    const toggleInlineStyle = (inlineStyle: string) => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
    };

    const contentState = editorState.getCurrentContent();
    let className = 'RichEditor-editor';
    if (!contentState.hasText()) {
        if (contentState.getBlockMap().first().getType() !== 'unstyled') {
            className += ' RichEditor-hidePlaceholder';
        }
    }

    return (
        <div className="RichEditor-root">
            <BlockStyleControls
                editorState={editorState}
                onToggle={toggleBlockType}
            />
            <InlineStyleControls
                editorState={editorState}
                onToggle={toggleInlineStyle}
            />
            <div className={className} onClick={focus}>
                <Editor
                    blockStyleFn={getBlockStyle}
                    customStyleMap={styleMap}
                    editorState={editorState}
                    handleKeyCommand={handleKeyCommand}
                    keyBindingFn={mapKeyToEditorCommand}
                    onChange={setEditorState}
                    placeholder="Write description about destination..."
                    ref={editorRef}
                    spellCheck={true}
                />
            </div>
        </div>
    );
};


// Custom overrides for "code" style.
const styleMap = {
    CODE: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 16,
        padding: 2,
    },
};

function getBlockStyle(block: ContentBlock): string {
    switch (block.getType()) {
        case 'blockquote': return 'RichEditor-blockquote';
        default: return "";
    }
}

interface StyleButtonProps {
    onToggle: (style: string) => void;
    style: string;
    label: string;
    active: boolean;
}

const StyleButton: React.FC<StyleButtonProps> = ({ onToggle, style, label, active }) => {
    const handleToggle = (e: React.MouseEvent) => {
        e.preventDefault();
        onToggle(style);
    };

    let className = 'RichEditor-styleButton';
    if (active) {
        className += ' RichEditor-activeButton';
    }

    return (
        <span className={className} onMouseDown={handleToggle}>
            {label}
        </span>
    );
};


const BLOCK_TYPES = [
    { label: 'H1', style: 'header-one' },
    { label: 'H2', style: 'header-two' },
    { label: 'H3', style: 'header-three' },
    { label: 'H4', style: 'header-four' },
    { label: 'H5', style: 'header-five' },
    { label: 'H6', style: 'header-six' },
    { label: 'Blockquote', style: 'blockquote' },
    { label: 'UL', style: 'unordered-list-item' },
    { label: 'OL', style: 'ordered-list-item' },
    { label: 'Code Block', style: 'code-block' },
];

const BlockStyleControls = (props: { onToggle?: any; editorState?: any; }) => {
    const { editorState } = props;
    const selection = editorState.getSelection();
    const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();

    return (
        <div className="RichEditor-controls">
            {BLOCK_TYPES.map((type) =>
                <StyleButton
                    key={type.label}
                    active={type.style === blockType}
                    label={type.label}
                    onToggle={props.onToggle}
                    style={type.style}
                />
            )}
        </div>
    );
};

var INLINE_STYLES = [
    { label: 'Bold', style: 'BOLD' },
    { label: 'Italic', style: 'ITALIC' },
    { label: 'Underline', style: 'UNDERLINE' },
    { label: 'Monospace', style: 'CODE' },
];

const InlineStyleControls = (props: { editorState: { getCurrentInlineStyle: () => any; }; onToggle: any; }) => {
    const currentStyle = props.editorState.getCurrentInlineStyle();

    return (
        <div className="RichEditor-controls">
            {INLINE_STYLES.map((type) =>
                <StyleButton
                    key={type.label}
                    active={currentStyle.has(type.style)}
                    label={type.label}
                    onToggle={props.onToggle}
                    style={type.style}
                />
            )}
        </div>
    );
};

export default RichTextEditor