let FilterBlock = React.createClass({
    displayName: "MyFilter",

    propTypes: {
        prop_array: React.PropTypes.array.isRequired,
        prop_array: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                 code: React.PropTypes.number.isRequired,
                 text: React.PropTypes.string.isRequired,
            })
        ),
        def_input_text : React.PropTypes.string,
        },
    
    getInitialState: function(){
        return {
        input_text: '',
        sorted: false, 
        array_to_display: this.props.prop_array,
            }
        },

    inputTextChanged: function(EO){
        console.log('VALUE has been changed - '+EO.target.value);//для проверки
        this.setState({input_text: EO.target.value})//меняет стэйт на текущее значение для отрисовки
        //console.log('STATE has been changed - '+this.state.input_text);//для проверки
    },

    //copy_array : this.props.prop_array,

    alphabet_Sort_Unsort: function(){
        let copy_array = this.props.prop_array.slice();
        if(this.state.sorted == false){
        this.setState({sorted: true, array_to_display : copy_array.sort((a, b) =>
            (a.text < b.text)? -1: 
            (a.text > b.text)? 1: 
            0)}), 
            //this.state.sorted = true,
            console.log('clicked')
        } 
        else{this.setState({sorted: false, array_to_display: this.props.prop_array,}),
            console.log("not clicked"),
            console.log(this.props.prop_array)            
        } 
    },

    clear:function(){
        //this.state.sorted = true;
        
        this.setState ({input_text : '', sorted: true});
        this.alphabet_Sort_Unsort();
        //this.setState({array_to_display : this.props.prop_array})
    },
    

  
    render: function(){
        console.log(this.props.prop_array) // для контроля
        let options = this.state.array_to_display.map(i =>
            (i.text.includes(this.state.input_text)) //если в слове есть подстрока, ...
                ?React.DOM.option({key: i.code,}, i.text,) // то строится соответствующий тег ...
                : null, // или не строится
        );//от map

        return React.DOM.div({className:'FilterBlock'},
            React.DOM.div(null, // первый атрибут обязат., ато заберёт первый элемент из содержания и невыполнит
                React.DOM.input({type:'checkbox', className:'Checkbox', onClick: this.alphabet_Sort_Unsort,}),
                React.DOM.input({type:'text', className: 'InputLine', value:this.state.input_text, 
                                onChange: this.inputTextChanged,}),
                React.DOM.input({type:'button', className: 'Button', value:'Сброс', onClick:this.clear}),
                ),
            React.DOM.div({className:'List_container'},
                React.DOM.select({className:'WordsList', size:'4', multiple:'True',}, options) 
              ),
            // React.DOM.input({type:'text', className:'additional', 
            //     value:this.state.input_text, // значине всегда берётся из стейта, при каждом изменении отрисовывается в обеих строках ввода
            //     onChange: this.inputTextChanged},) //доп строка ввода
            
        )//от return
    } //от render
});//от FilterBlock