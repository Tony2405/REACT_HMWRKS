let ShopComponent = React.createClass({
    displayName: "shopName",

    getDefaultProps: function(){
        return {name: "Coudn't get the name!"}
    },

    propTypes: { // пропсы прописываются для каждого компонента 
        items: React.PropTypes.arrayOf( //можно расписать форму в которой приходит пропс
            React.PropTypes.shape({
                name: React.PropTypes.string.isRequired,
                photo_url: React.PropTypes.string.isRequired,
                price: React.PropTypes.number.isRequired,
                in_stock: React.PropTypes.number.isRequired,
                code: React.PropTypes.number.isRequired,
            })
        )
    },

    getInitialState: function(){
        return{
            selected_item_id: 0, //в стейте изначальное значение идентификатора = 0,
        }
    },

    selectItem: function(arg){       // эта функция/метод пойдёт в коллбэк
        this.setState({selected_item_id: arg});
        //let selected_row_number = EO.target.code; //для проверки
        //console.log(this.target.code)
        console.log(arg); // для проверки / работает
        
    },

    render: function(){

        let item_to_display = this.props.items.map(i => //сюда сложится массив с компонентом для отрисовки позиций
            React.createElement(ItemComponent, {
                key: i.code, 
                code:i.code, 
                name: i.name,
                price: i.price, 
                in_stock: i.in_stock,
                photo_url: i.photo_url,
                callBack_SelectedItem: this.selectItem, // тут я передаю коллбэк в пропсы, должно же работать!
                selected: this.state.selected_item_id, //тут я передаю признак в пропсы
            } // переданы пропсы в дочерний компонент ItemComponent
            )
        ); 


        let header_rubric = this.props.header; //описание шапки магазина
        let rubric = //сюда сложится код для отрисовки шапки
                React.DOM.tr({className:"Header_Row"}, 
                    React.DOM.td({className:"Column"}, header_rubric.name,),
                    React.DOM.td({className:"Column"}, header_rubric.image,),
                    React.DOM.td({className:"Column"}, header_rubric.price,),
                    React.DOM.td({className:"Column"}, header_rubric.stock,), 
                    );

        return  React.DOM.div({className: "GeneralView"},
                    React.DOM.div({className: "ShopName"}, this.props.name),
                    React.DOM.table({className:"Table"},
                            React.DOM.thead({className:'Table_header'}, rubric),
                            React.DOM.tbody({className:'Table_body'}, item_to_display),
                    ), 
                );
        
    },//от render
});


