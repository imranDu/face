import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return (
		<div >
			<p className='f3 center'>
			  {'This magic brain will detect face in your pics,Git it a try'}
			</p>
			<div className='center'>
			  <div className='form center shadow-5 br3 pa4'>
				<input   className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
				<button  className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple center' onClick={onButtonSubmit}>Detect</button>
			  </div>
			  
			</div>
		</div>
		);
}
export default ImageLinkForm;