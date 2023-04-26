import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Getapi = () => {
    let [data, updatedata] = useState([]);
    let [product, updateproduct] = useState({ id: '', name: '', price: '', cat: '', cmp: '' });
    let [sdata,updatesdata]=useState({id:'',name:'',price:'',cmp:''});
    async function show() {
        let r = await axios.get('http://tanveerpp.pythonanywhere.com/product/');
        // console.log(r.data);
        updatedata(r.data);
        // alert('j');
    }
    useEffect(() => {
        show();
    }, [data])
    const change = (e) => {
        updateproduct({ ...product, [e.target.name]: e.target.value });
    }
    return (
        <>
            <label htmlFor="srch" className='form-label'>Search</label>
            <input type="text" id='srch' className='form-control' onChange={(e) => {
                async function searchs() {
                    try {
                        let r = await axios.get(`http://tanveerpp.pythonanywhere.com/product/${e.target.value}/`);
                        // updatesdata(r.data);
                        console.log(r.data);
                    } catch (error) {
                        console.log(error)
                    }

                }
                searchs();
            }} />
            <div>{sdata.id} {sdata.name} {sdata.price} {sdata.cmp} </div>
<hr />  
            <table className='table table-bordered table-hover'>
                <thead>
                    <tr>
                        <th>pid</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((v) => {
                        return (<tr key={v.id}>
                            <td>{v.id}</td>
                            <td>{v.name}</td>
                            <td>{v.price} </td>
                            <td>{v.cat} </td>
                            <td>{v.cmp} </td>
                            <td><button className='btn btn-warning' onClick={() => {
                                updateproduct(v);
                            }}>Update</button></td>
                            <td><button className='btn btn-danger ' onClick={(e) => {
                                async function delpro() {
                                    let res = await axios.delete(`http://tanveerpp.pythonanywhere.com/product/${v.id}/`);
                                    if (res.status === 204) {
                                        alert('product sucessfully deleted');
                                    }
                                }
                                delpro();
                            }}>Delete</button> </td>
                        </tr>)
                    })}
                </tbody>
            </table>
            <form className='container bg-primary text-white' onSubmit={(e) => {
                e.preventDefault();
                console.log(product.id)
                async function addpro() {
                    alert('form')
                    let r = await axios.post('http://tanveerpp.pythonanywhere.com/product/', product);
                    console.log(r);
                    if (r.status === 201) {
                        alert('Product added succesfully');
                    }
                }
                async function updatepro() {
                    let r = await axios.put(`http://tanveerpp.pythonanywhere.com/product/${product.id}/`, product);
                    if (r.status === 200) {
                        alert('Product sucesfully updated');
                        updateproduct({ name: '', price: '', cat: '', cmp: '' });
                    }
                }
                if (product.id === "") {
                    addpro();
                }
                else {
                    updatepro();
                }
            }}>
                Name<input type="text" name='name' value={product.name} onChange={change} className='form-control' />
                Price<input type="text" name='price' value={product.price} onChange={change} className='form-control' />
                Category<input type="text" name='cat' value={product.cat} onChange={change} className='form-control' />
                Company<input type="text" name='cmp' value={product.cmp} onChange={change} className='form-control' /><br />
                {/* <button className='btn btn-secondry form-control text-white btn-hover'>Add Product</button> */}
                {product.id === '' ? <button className='btn btn-primary' >Add Product</button> : <button className='btn btn-primary'>Update Product</button>}
            </form>
        </>
    )
}

export default Getapi