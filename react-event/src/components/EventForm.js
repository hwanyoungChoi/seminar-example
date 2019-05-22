import React, { Component } from 'react';

class EventForm extends Component {
    state = {
        title: '',
        description: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value // 계산된 속성
        });
    }

    handleSubmit = (e) => {
        e.preventDefault(); // 페이지 리로딩 방지
        this.props.onCreate(this.state); // 상태 값 부모에게 전달 onCreate로
        this.setState({
            title: '',
            description: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="제목"
                    value={this.state.title}
                    onChange={this.handleChange}
                    name="title"
                />
                <input
                    placeholder="내용"
                    value={this.state.description}
                    onChange={this.handleChange}
                    name="description"
                />
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default EventForm;