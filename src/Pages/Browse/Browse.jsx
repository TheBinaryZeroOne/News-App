import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchData, selectSearch } from '../../Features/HomeSlice'
import Card from '../../Components/Card'
import { FaSearch } from "react-icons/fa";

const Browse = () => {

    const dispatch = useDispatch()
    const searchData = useSelector(selectSearch)

    const [browse, setBrowse] = useState("")
    const [updateBrowse, setUpdateBrowse] = useState("")

    useEffect(() => {
        if (browse !== "") {
            dispatch(fetchSearchData(updateBrowse))
            console.log(searchData)
        }
    }, [updateBrowse, dispatch])

    return (
        <>
            <div className="container mt-4 d-flex align-items-center justify-content-center">
                <div className="input-group flex-nowrap w-50">
                    <input
                        type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-lg"
                        placeholder='Search For News'
                        style={{ padding: "1.5vh 2vh", fontSize: "1.2rem", border: "2px solid gray" }}
                        value={browse}
                        onChange={(e) => setBrowse(e.target.value)}
                    />
                    <span
                        className="input-group-text"
                        id="inputGroup-sizing-lg"
                        style={{ padding: "1.5vh 2vh", fontSize: "1.2rem", border: "2px solid gray" }}
                        onClick={() => setUpdateBrowse(browse)}
                    >
                        <FaSearch color='#AF0E38 ' />
                    </span>
                </div>
            </div>

            {
                (searchData.data === null) ?

                    <div style={{marginTop: "10%", cursor: "default"}}>
                        <h1 className='text-center display-1 fw-bold'>"Search Something!"</h1>
                    </div>
                    :
                    <div className="container d-flex justify-content-center align-items-center flex-wrap gap-5 mt-5">
                        {
                            searchData.data?.articles?.map((item) => {
                                return (
                                    <div className='w-25'>
                                        <Card {...item} />
                                    </div>
                                )
                            })
                        }
                    </div>
            }

        </>
    )
}

export default Browse
