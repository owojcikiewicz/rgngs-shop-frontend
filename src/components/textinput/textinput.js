import React from "react";
import "./textinput.css";

class TextInput extends React.Component {
	constructor(props) {
		super(props)
		this.title = props.title;
		this.type = props.type;
		this.placeholder = props.placeholder;
	}
	render() {
    return(
			<div class="input-container">
				 <label class="input-label">{this.title}</label>
          <input class="input-space" type={this.type} placeholder={this.placeholder}/>
			</div>
		)
  }
}


class CheckBox extends React.Component {
	constructor(props) {
		super(props)
		this.text = props.text;
	}
	render() {
    return(
					<div>
					<input type="checkbox" id="inputCheckbox" name="inputCheckbox"></input>
					<label for="inputCheckbox">{this.text}</label>
			</div>
		)
  }
}

export {
	TextInput,
	CheckBox
} 


TextInput.defaultProps = {
	title: "TITLE",
	type: "text",
	placeholder: "Placeholder"
};

CheckBox.defaultProps = {
	text: "Checkbox",
};
