let ItemComponent = React.createClass({
    displayName: 'Item Component',

    propTypes: {
        code: React.PropTypes.number.isRequired, // я думал что 
        name: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        in_stock: React.PropTypes.number.isRequired,
        photo_url: React.PropTypes.string.isRequired,
        selected: React.PropTypes.number.isRequired,
        callBack_SelectedItem: React.PropTypes.func.isRequired,
        },

    eventHandler: function(EO){
            console.log(this.props.code)//почему-то это показывает, 
            //console.log(EO.target.code) // а это нет
            this.props.callBack_SelectedItem(this.props.code)
            
        },

    render: function(){
       if(this.props.code == this.props.selected)
                                           
        {return  React.DOM.tr( {className:'Yellow_Row', onClick: this.eventHandler}, // отсюда с <tr> должно идти EO.target
                    React.DOM.td({className:"Column"}, this.props.name,),
                    React.DOM.td({className:"Column"}, this.props.photo_url,),
                    React.DOM.td({className:"Column"}, this.props.price,),
                    React.DOM.td({className:"Column"}, this.props.in_stock,),
                ); //от tr
        }
       else{
        return  React.DOM.tr( {className:'Row', onClick: this.eventHandler}, // отсюда с <tr> должно идти EO.target
                    React.DOM.td({className:"Column"}, this.props.name,),
                    React.DOM.td({className:"Column"}, this.props.photo_url,),
                    React.DOM.td({className:"Column"}, this.props.price,),
                    React.DOM.td({className:"Column"}, this.props.in_stock,),
                );
       }
    }, //от рендера

})//от компонента