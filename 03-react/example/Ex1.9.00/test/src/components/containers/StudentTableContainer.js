///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import {connect, routerRedux} from "dva";
import {StudentTable} from "@/components/StudentTable";

//-------------------------------------------------------------------------------------------------------------------//


const mapStateToProps = state => ({

    stus: state.students.result.datas

}), mapDispatchToProps = dispatch => ({


});


//-------------------------------------------------------------------------------------------------------------------//


export default connect(mapStateToProps, mapDispatchToProps)(StudentTable);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
