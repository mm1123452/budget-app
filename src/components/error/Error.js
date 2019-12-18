import React from 'react';

const ErrorComponent  = ({message}) => (
	<div className="alert alert-danger mt-3" role="alert">
	  {message}
	</div>
)

export default ErrorComponent;