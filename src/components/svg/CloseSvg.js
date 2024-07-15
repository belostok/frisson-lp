const CloseSvg = ( { color } ) => {

	return (
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" clipRule="evenodd"
				d="M4.50581 4.50483C4.77917 4.23146 5.22239 4.23146 5.49576 4.50483L12.0008 11.0099L18.5058 4.50483C18.7792 4.23146 19.2224 4.23146 19.4958 4.50483C19.7691 4.7782 19.7691 5.22141 19.4958 5.49478L12.9907 11.9998L19.4958 18.5048C19.7691 18.7782 19.7691 19.2214 19.4958 19.4948C19.2224 19.7681 18.7792 19.7681 18.5058 19.4948L12.0008 12.9898L5.49576 19.4948C5.22239 19.7681 4.77917 19.7681 4.50581 19.4948C4.23244 19.2214 4.23244 18.7782 4.50581 18.5048L11.0108 11.9998L4.50581 5.49478C4.23244 5.22141 4.23244 4.7782 4.50581 4.50483Z"
				fill={ color || '#20467B' }/>
		</svg>

	);
}

export default CloseSvg;
