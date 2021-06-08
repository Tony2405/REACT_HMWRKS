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

    process_list: function(){
        let processed_array = this.props.prop_array.slice();
        console.log(processed_array)
        if(this.state.input_text){ // если во вводе что-нибудь ввдено, то ...
            processed_array = processed_array.filter(i => i.text.indexOf(this.state.input_text)!=-1);//в массиве объектов точная ссылка i.text
            }
        if (this.state.sorted){this.state.array_to_display = processed_array.sort((a, b) => // сортировка массива объектов
            (a.text < b.text)? -1: 
            (a.text > b.text)? 1: 
            0)}
        this.setState({array_to_display : processed_array})
    },
    
    inputTextChanged: function(EO){
        console.log('VALUE has been changed - '+EO.target.value);//для проверки
        this.setState({input_text: EO.target.value}, this.process_list)//меняет стэйт на текущее значение для отрисовки
        //console.log('STATE has been changed - '+this.state.input_text);//для проверки
    },

    alphabet_Sort_Unsort: function(EO){
        this.setState({sorted: EO.target.checked}, this.process_list);
        console.log('sorted state is now ' + this.state.sorted)
    },

    clear:function(){
        this.setState ({input_text : '', sorted : false}, this.process_list);
    },

  
    render: function(){
        //console.log(this.props.prop_array) // для контроля
        let options = this.state.array_to_display.map(i =>
             (i.text.includes(this.state.input_text)) //если в слове есть подстрока, ...
               ?React.DOM.option({key: i.code,}, i.text,) // то строится соответствующий тег ...
                 : null, // или не строится
         );//от map

        return React.DOM.div({className:'FilterBlock'},
            React.DOM.div(null, // первый атрибут обязат., ато заберёт первый элемент из содержания и невыполнит
                React.DOM.input({type:'checkbox', className:'Checkbox', checked:this.state.sorted, // в атрибутах завис-ть реального отображ от знач. стейта
                                onChange: this.alphabet_Sort_Unsort,}),
                React.DOM.input({type:'text', className: 'InputLine', value:this.state.input_text, 
                                onChange: this.inputTextChanged,}),
                React.DOM.input({type:'button', className: 'Button', value:'Сброс', onClick:this.clear}),
                ),
            React.DOM.div({className:'List_container'},
                React.DOM.select({className:'WordsList', size:'4', multiple:'True',}, options) 
              ),
            
        )//от return
    } //от render
});//от FilterBlock