import React from 'react'

import {TextField,Paper,Button,Grid} from '@material-ui/core'

class AddTodo extends React.Component {
    constructor(props){
            super(props);
            this.state = {item:{title:""}};
            this.add = props.add; // app.js 에서 넘겨준거 받아서 add에 담기

    }
        // 이벤트 처리할 함수 생성 
            //1. input의 내용이 변경될때 호출될 함수
            onInputChange = (e) => {
                const thisItem = this.state.item;
                thisItem.title = e.target.value;
                this.setState({item: thisItem});
            }
            //+ 버튼 눌렀을떄 호출될 함수
         onclick = ()=>{
        this.add(this.state.item)
        this.setState({item:{title:""}});
        }
        enterKeyEventHandler = (e) =>{
            if(e.key === "Enter"){
                this.onclick();
            }
        }
    render(){
        return (
            <Paper style={{margin:16 , padding:16}}>
                <Grid container>
                    <Grid xs={11} item style={{paddingRIght:16}}>
                        <TextField
                            placeholder="텍스트입력"
                            fullWidth={true}
                            onChange={this.onInputChange}
                            value={this.state.item.title}
                            onKeyPress={this.enterKeyEventHandler}
                            />
                    </Grid>
                        <Grid xs={1} md={1} item>
                            <Button
                                fullwidth={true}
                                color="secondary"
                                variant="outlined"
                                onClick={this.onclick}>
                                    +
                            </Button>

                        </Grid>
                </Grid>

                </Paper>
        )
    }
}

export default AddTodo;