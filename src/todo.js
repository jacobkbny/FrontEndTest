import React from 'react';


import{
    ListItem,
    ListItemText,
    InputBase,
    Checkbox,
    ListItemSecondaryAction,
    IconButton
}from "@material-ui/core";

import DeleteOutlined from '@material-ui/icons/DeleteOutlined';

class Todo extends React.Component {
    constructor(props){
     super(props);
    this.state = {item:props.item, readOnly:true};
    this.delete=props.delete;
    this.update=props.update;
}
    deleteEventHandler = () => {
            this.delete(this.state.item);
    }
     //enter를 누르면 호출될 함수 
     enterKeyPressed = (e) =>{
        if(e.key === "Enter"){
            this.setState({readOnly:true});
            this.update(this.state.item);
        }
    }
    modifyEventHandler = (e) =>{
        const thisItem = this.state.item;
         thisItem.title = e.target.value;
         this.setState({item:thisItem});
    }
    checkboxEventHandler = (e) =>{
        const thisItem = this.state.item;
        thisItem.done = !thisItem.done;
        this.setState({item:thisItem});
        this.update(this.state.item);
    }
    offReadOnly=()=>{
        console.log("이벤트:"+this.state.readOnly);
          this.setState({readOnly:false},()=>{
                console.log("읽기 전용?",this.state.readOnly);
          })
    }


        //삭제 이벤트 처리를 위한 함수
    // 함수를 만드는 방법 1.function 이름(매개변수){}
    // 2. var 변수이름 = function(애개변수){}
    render(){
        const item = this.state.item;
        return(
            <ListItem>
                <Checkbox checked={item.done} onChange={this.checkboxEventHandler}/>
                <ListItemText>
                    <InputBase
                        inputProps={{"aria-label":"naked", readOnly:this.state.readOnly}}
                        type="text"
                        id={item.id}
                        name={item.id}
                        value={item.title}
                        multiline={true}
                        fullwidth={true}
                        onClick={this.offReadOnly}
                        onChange={this.modifyEventHandler}
                        onKeyPress={this.enterKeyPressed}
                        />
                </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Delete Todo" onClick={this.deleteEventHandler}>
                            <DeleteOutlined />
                        </IconButton>
                    </ListItemSecondaryAction>
            </ListItem>
        )
    }

}
export default Todo;