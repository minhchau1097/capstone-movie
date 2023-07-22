import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchListMovie } from './duck/actions'

export default function HomePage() {
    const loading = useSelector((state) => state.listMovieReducer.loading)
    const data = useSelector((state) => state.listMovieReducer.data)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchListMovie())
    },[])

    const renderMovie = () => {
        if (loading) return <div>Loading...</div>
        return data?.map((movie) => {
            return (
                <div className="col-md-3" key={movie.maPhim}>
                    <div className="card">
                        <img className="card-img-top" src={movie.hinhAnh} alt="" />
                        <div className="card-body">
                            <h4 className="card-title">{movie.tenPhim}</h4>
                            {/* <Link to={`/detail/${movie.maPhim}`} className="btn btn-success">Detail</Link> */}
                        </div>
                    </div>
                </div>
            )
        })
    }
    return (
        <div className='container'>
            <div className="row">
                {renderMovie()}
            </div>

        </div>
    )
}
