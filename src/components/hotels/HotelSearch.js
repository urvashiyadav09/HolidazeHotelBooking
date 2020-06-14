import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from "prop-types";

function HotelSearch({findHotel}){
    const [searchValue, setSearchValue] = useState("");

    function updatedValue (event){
        setSearchValue(event.target.value);

    }
    return(

        <>
        <div className="HotelsSearch">
            <div className="HotelsSearch__searchForm">
                <Form>
                    <Form.Group>
                        <Form.Control className="HotelsSearch__searchForm--label" value = {searchValue} onChange={updatedValue} type="text" placeholder="Search hotel...." />
                    </Form.Group>
                </Form>
            </div>

            <div className="HotelsSearch__searchBtn">
                <Button onClick={() => findHotel(searchValue)} type="submit" className="srchBtn">Search</Button>
            </div>
        </div>    
        </>

);
}

HotelSearch.propTypes = {
    findHotel: PropTypes.func.isRequired,
}

export default HotelSearch;