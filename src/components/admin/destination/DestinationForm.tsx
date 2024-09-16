import React, { useState } from 'react';
import RichTextEditor from '../../ui/RichTextEditor';
import { EditorState } from 'draft-js';

type Props = {}

function DestinationForm({ }: Props): React.JSX.Element {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

    return (
        <div>
            <form>
                <div className="card card-bordered mx-5 sm:mx-auto sm:w-4/5 lg:w-3/4 mt-5 mb-10">
                    <div className="card-body">
                        <div className="card-title justify-center mb-10">
                            <h2>Add Study Destination</h2>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 mb-2'>
                            <label htmlFor="destination-name" className='font-semibold'>Destination Name</label>
                            <div className='form-control'>
                                <input type="text" name="name" id="destination-name" className='input input-bordered focus:outline-none focus:border-primary' />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 mb-2'>
                            <label htmlFor="title" className='font-semibold'>Destination Title</label>
                            <div className='form-control'>
                                <input type="text" name="title" id="title" className='input input-bordered focus:outline-none focus:border-primary' />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 mb-2'>
                            <div>
                                <label htmlFor="destination-thumbnail" className='font-semibold block'>Destination thumbnail</label>
                                <span className='inline-block text-xs text-slate-500'>Uploaded thumbnail should be in jpg, png, jpeg, avif, webp formats. <br /> width and height should be 400x300 px</span>
                            </div>
                            <div className='form-control'>
                                <input type="file" name="destination-thumbnail" id="destination-thumbnail" className='file-input' />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 mb-2'>
                            <div>
                                <label htmlFor="destination-image" className='font-semibold block'>Destination Image</label>
                                <span className='inline-block text-xs text-slate-500'>Uploaded Image should be in jpg, png, jpeg, avif, webp formats <br />More than one images can upload</span>
                            </div>
                            <div className='form-control'>
                                <input type="file" name="destination-image" id="destination-image" className='file-input' multiple />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 mb-2'>
                            <p className='font-semibold cursor-default'>Description</p>
                            <div className='form-control'>
                                <RichTextEditor editorState={editorState} setEditorState={setEditorState} />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 mb-2'>
                            <div className='form-control'>
                                <label className="label cursor-pointer w-40">
                                    <input type="checkbox" className="checkbox" />
                                    <span className="label-text">Publish Destination</span>
                                </label>
                            </div>
                        </div>
                        <div className="card-actions">
                            <button type="submit" className='btn btn-neutral'>Save</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default DestinationForm