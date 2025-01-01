import React from "react";

/*-------- Ngày 3 --------------------
3.1. chỉ tả về 1 khối <div> nếu có 2 cái div trả về là lỗi
3.2. để tả về <div> độc lập thì ta nên dùng <React.Fragment> hoặc có thể dùng fragment
3.3. fragment như kiểu áo giáp để tránh việc nhận lỗi khi trả về 2 thẻ <div>
3.4. khi thiết kế nên dùng className
3.5. State giúp cho dữ liệu cập nhật re-render mà không cần load lại trang
        
------ Ngày 4 --------------------
4.1 React dev tools là công cụ để có thể kiểm tra dữ liệu ngay trên website của bạn
4.2 DOM (Document object model) hiểu đơn giãn là các phần tử trong Element gọi là DOM
    ta có thể dùng  <button onClick={() => {this.handleClick()}}>
                        Click me
                    </button>
    arrow function
    hoặc
                    <button onClick={this.handleClick}>
                        Click me
                    </button>.

4.3. event trong Onchange là khi khởi tạo Onchange thì nó sẽ tự tạo cho ta 1 event để trả về 1 object
    trong oject đó sẽ chứa dữ liệu bao gồm có target thằng này nó sẽ trả về cho mình 1 object input chứa
    object các dữ liệu dưới dạng Key và Value


4.4. Hàm setState sẽ tự động cập nhật lại state components đó,
     nó có thể được cập nhật dữ liệu mà bạn được chỉ định còn các dữ liệu khác thì có thể để nguyên

4.5 lưu ý khi cập nhật lại state 'ĐỪNG BAO GIỜ DÙNG' this.state.name = event.target.name thay vào đó hãy sử dụng setState
*/




class testComponent extends React.Component {

    state = {
        name: 'test',
        year: new Date().getHours() + 'h - ' + new Date().getMinutes() + 'p'
    };

    handleOnChange = (event) => { 
        this.setState({
            name: event.target.value,
        });
    }

    handleClick = (event) => {
        alert('xin chào bạn: ' + event );
    };
    

    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            alert('Xin chào bạn ' + event.target.value);
        }
    };

    render() {
        let color = 'green';
        if (this.state.name === 'Bình') {
            color = 'red';
        }

        return (
            <>
                <div className="main-container">
                    Bạn tên là gì: 
                    <input value={this.state.name}
                        type="text" onChange={(event) => this.handleOnChange(event)}
                        onKeyDown={(event) => this.handleKeyDown(event)}// bắt sự kiện enter
                    />
                    <br />
                    {console.log('My name: ', this.state.name)}
                    tôi tên là {this.state.name}
                </div>
                <div className="main-container2">
                    <button onClick={() => {this.handleClick(this.state.name)}}>
                        Click me
                    </button>
                </div>
                <div className="main-container3">
                    State: {this.state.name} và {this.state.year} và màu {color}
                </div>

            </>
        )
    }
}

export default testComponent;