import React, { Component } from 'react';

class Form extends Component {
    
    categoryRef = React.createRef();

    changeCategory = (e) => {
        e.preventDefault();

        // console.log(this.categoryRef.current.value)

        // enviar por props
        this.props.getNews(this.categoryRef.current.value);
        
    }

    render() { 
        return ( 
            <div className="search row">
                <div className="col s12 m8 offset-m2">
                    <form onSubmit={this.changeCategory}>
                        <h2>Noticias por Categoría</h2>
                        <div className="input-field col s12 m8">
                            <select ref={this.categoryRef}>
                                <option value="general" defaultValue>General</option>
                                <option value="business">Negocios</option>
                                <option value="entertainment">Entretenimiento</option>
                                <option value="health">Salud</option>
                                <option value="science">Ciencia</option>
                                <option value="sports">Deportes</option>
                                <option value="technology">Tecnología</option>
                            </select>
                        </div>
                        <div className="input-field col s12 m4 send">
                            <input className="btn amber darken-2" type="submit" value="Buscar"/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default Form;