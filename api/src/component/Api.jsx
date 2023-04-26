import axios from 'axios';
import React, { useEffect, useState } from 'react'
const Api = () => {
    let [data,updatedata]=useState([]);
    let[product,updateproduct]=useState({id:'',name:'',price:'',cat:'',cmp:''})
    async function show()
    {
        let r=await axios.get('http://tanveerpp.pythonanywhere.com/product/');
        updatedata(r.data);
    }
    useEffect(()=>{
        show()
    })
    const change=(e)=>{
        updateproduct({...product,[e.target.name]:e.target.value});
    }
  return (
    <>
        <input type="text" onChange={(e)=>{
            async function searchs()
            {
                try{
                let r=await axios.get(`http://tanveerpp.pythonanywhere.com/product/${e.target.value}/`);
                 updatedata([r.data]);   
                }catch(error)
                {
                    console.log(error)
                }
            }  
            searchs();     
        }}/>
        <table className='table table-bordered table-primary text-center '>
        <thead>
            <tr>
                    <th>Pid</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Company</th>
            </tr>
            </thead>
            <tbody>
            {data.map((v)=>{
                return(<tr key={v.id}>
                    <td>{v.id}</td>
                    <td>{v.name}</td>
                    <td>{v.price}</td>
                    <td>{v.cat}</td>
                    <td>{v.cmp}</td>
                    <td><button onClick={()=>{
                        updateproduct(v);
                    }} className='btn btn-warning'>Update</button></td>
                    <td><button className='btn btn-danger' onClick={()=>{
                        async function delpro()
                        {
                            let res=await axios.delete(`http://tanveerpp.pythonanywhere.com/product/${v.id}/`);
                            if(res.status===204)
                            {
                                alert('product sucessfully deleted');
                            }
                        }
                        delpro()
                    }}>Delete</button></td>
                </tr>)
            })}
            </tbody>
        </table>
        <form onSubmit={(e)=>{
            e.preventDefault();
            async function addpro()
            {
                let r=await axios.post('http://tanveerpp.pythonanywhere.com/product/',product);
                if(r.status===201)
                {
                    alert('product sucessfully added')
                }
            }
            async function updatepro()
            {
                let r=await axios.put(`http://tanveerpp.pythonanywhere.com/product/${product.id}/`,product);
                if(r.status===200)
                {
                    alert('product sucessfully updated')
                }
            }
            if(product.id==="")
            {
                addpro();
            }
            else{
                updatepro();
            }
        }}>
            Name<input type="text" name="name" value={product.name} onChange={change} className="form-control" />
            Price<input type="number" name="price" value={product.price} onChange={change} className="form-control" />
            Category<input type=		"text" name="cat" value={product.cat} onChange={change} className="form-control" />
            Company<input type="text" name="cmp" value={product.cmp} onChange={change} className="form-control" />
            {product.id===''?<button className='btn btn-primary'>Add Product</button>:<button className='btn btn-primary'>Update Product</button>}
        </form>
    </>
  )
}
export default Api
