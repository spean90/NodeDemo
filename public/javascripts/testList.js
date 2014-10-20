/**
 * Created by Administrator on 2014/10/10.
 */
var loadGroup = function(){
    $('#group').datagrid({
        url:'/test/group',
        rownumbers : true,
        fitColumns : true,
        columns:[[
            {field:'class',title:'class',width:100},
            {field:'count',title:'count',width:100}
        ]]
    });
}



$(function(){
    $('#testlist').datagrid({
        url:'/test/list',
        rownumbers : true,
        pagination : true,
        fitColumns : true,
        columns:[[
            {field:'id',width:300,checkbox:true},
            {field:'_id',title:'id',width:300},
            {field:'name',title:'Name',width:100},
            {field:'age',title:'age',width:100},
            {field:'class',title:'class',width:100}
        ]]
    });
});