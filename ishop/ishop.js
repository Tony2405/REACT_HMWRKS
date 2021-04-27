let ShopComponent = React.createClass({
    displayName: "shopName",
    // display_image: function(){
    //     console.log(toString(this.props.items.photo_url))
    // }

    getDefaultProps: function(){
        return {name: "Coudn't get the name!"}
    },

    render: function(){
        let items_list=[];//пустой массив, кот будет содержать VDOM
        
        this.props.items.forEach(function(item){
            let item_code=                                                                              
            React.DOM.tr({key:item.code, className:'Row'}, 
                React.DOM.td({className:"Column"}, item.name,),
                React.DOM.td({className:"Column"}, item.photo_url,),
                React.DOM.td({className:"Column"}, item.price,),
                React.DOM.td({className:"Column"}, item.in_stock,),
            );
            items_list.push(item_code);
        })

        let header_rubric = this.props.header;
        let rubric = 
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
                            React.DOM.tbody({className:'Table_body'}, items_list),
                    ), 
                );
        
    },//от render
});


