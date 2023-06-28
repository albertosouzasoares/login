import styled from 'styled-components';

export const BoxLogin = styled.div`
	max-width: 400px;
    width: 100%;
	margin: 0px auto;
`;

export const Box = styled.div`
    background-color: #FFFFFF;
	border: 1px solid #00000040;
    box-shadow: 0px 0px 8px 2px #00000040;
    border-radius: 6px;
    padding: 20px;

    h3 {
    	font-size: 22px;
    }

    div {
    	margin: 20px 0px;

    	input#token {
    		font-weight: bold;
    	}

    	input {
		    width: 100%;
		    padding: 12px;
    		border: 1px solid #00000040;
		    border-radius: 6px;
		    text-transform: lowercase;
    	}

    	label {
    		display: block;
    		margin-top: 6px;
    		font-size: 14px;
    		color: #EB2030;
    	}
    }

    div.view {
    	display: flex;
    	align-items: center;

    	input {
    		width: auto;
    		cursor: pointer;
    	}

    	label {
    		width: 100%;
    		margin: 0px 0px 0px 8px;
    		cursor: pointer;
            color: #212529;
    	}
    }

    button {
    	width: 100%;
    	display: flex;
    	align-items: center;
    	justify-content: center;
    	gap: 8px;
    	padding: 12px;
    	color: #FFFFFF;
    	background-color: #6690FF;
    	border-radius: 6px;

    	&:hover {
    		background-color: #00000040;
    	}
    }

    hr {
    	margin: 30px 0px;
	    border: none;
	    opacity: 0.2;
	    height: 1px;
	    background-color: #212529;
    }

    div.options {
    	display: flex;
    	flex-direction: column;
    	align-items: center;
    	gap: 8px;
    	margin: 0px;

		a:hover {
    		color: #6690FF;
    	}
    }
`;