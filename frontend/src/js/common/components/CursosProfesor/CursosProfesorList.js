import React, {Component} from "react";
import { Link } from 'react-router-dom';
import Grid from "../Utils/Grid";
import PropTypes from 'prop-types';
import cursosProfesor from "../../../redux/modules/cursosProfesor/cursosProfesor";



class CursosProfesorList extends Component{
    static propTypes = {
        data: PropTypes.array.isRequired

    };
    componentWillMount = () => {
        const {listar} = this.props;

        listar();

    }
    render(){
        const { data, loader, verasignados}= this.props;
        console.log("data",data)
        return(
            <div>
                
                <h3> Mis Cursos </h3>
                
                
                    <Grid
                        hover
                        striped
                        data={data}
                        loading={loader}
                        //onPageChange={onPageChange}
                        //onSortChange={onSortChange}
                    >
                        <TableHeaderColumn
                            dataField="curso"
                            dataSort
                            dataFormat={(cell,row)=>{
                                console.log("row: ", row)
                                return cell.curso_name;
                            }}
                        >
                            Curso
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            isKey
                            dataField="id"
                            dataAlign="center"
                            dataSort
                            /*dataFormat= {
                                cursosProfesor({
                                verasignados: 'asignados',
                            })}*/
                        >
                            Ver Asignados
                        </TableHeaderColumn>
                    </Grid>
                    
                
            </div>
        );
    }
}

export default CursosProfesorList;