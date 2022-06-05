import React,{useState} from "react";
import './TrackOrder.css';



const TrackOrder=()=>{

    const onClickOne=()=>{
        setstg1(!stg1);
    }
    const onClickTwo=()=>{
        setstg2(!stg2);
        if(!stg1){
            setstg1(true);
        }

        
    }
    const onClickThree=()=>{
        setstg3(!stg3);
        if(!stg1 || !stg2){
            setstg1(true);
            setstg2(true);

        }

    }
    const onClickFour=()=>{
        setstg4(!stg4);
        if(!stg1 || !stg2 || !stg3){
            setstg1(true);
            setstg2(true);
            setstg3(true);


        }

    }
    const onClickFive=()=>{
        setstg5(!stg5);
        if(!stg1 || !stg2 || !stg3 ||stg4){
            setstg1(true);
            setstg2(true);
            setstg3(true);
            setstg4(true);



        }

    }


let ordernumber;
let arrival;
let code;
const [stg1, setstg1] = useState(false);
const [stg2, setstg2] = useState(false);
const [stg3, setstg3] = useState(false);
const [stg4, setstg4] = useState(false);
const [stg5, setstg5] = useState(false);



let t;

// const [stg2,setstg2]=0;

// const [stg3,setstg3]=0;
// const [stg4,setstg4]=0;
return(
    <div className="containerTrackOrder">
        <div className="OrderDetailsHeader">
            <div className="Order">
                <h3>Order {ordernumber}</h3>
            </div>
            <div className="Arrival">
                <p>Expected Arrival {arrival}</p>
                <p>Grasshoppers {code}</p>
            </div>
        </div>
        {/* Order Tracking bar */}
        <div className="ordertracking__container">

        <div className="stageBT">

            {
            stg1?
            <><button style={{backgroundColor:"green"}}>Active </button><div className="line" style={{backgroundColor:"green"}}></div></>:<> <button >Stage 1</button> <div className="line"></div></>
            }
            

            

            {
                stg1 && stg2?
                <><button style={{backgroundColor:"green"}}>Active </button><div className="line" style={{backgroundColor:"green"}}></div></>:<> <button >Stage 2</button> <div className="line"></div></>

            }
            {
                stg1 && stg2 && stg3 ?
                <><button style={{backgroundColor:"green"}}>Active </button><div className="line" style={{backgroundColor:"green"}}></div></>:<> <button >Stage 3</button> <div className="line"></div></>
                
            }
            {
                stg1 && stg2 && stg3 && stg4 ?
                <><button style={{backgroundColor:"green"}}>Active </button><div className="line" style={{backgroundColor:"green"}}></div></>:<> <button >Stage 4</button> <div className="line"></div></>

            }


            
{
                stg1 && stg2 && stg3 && stg4 && stg5 ?
<><button style={{backgroundColor:"green"}}>Active</button></>:<> <button >Stage 5</button></>

            }
        </div>

        <div className="stagesHeader">
            <div className="stg_btn">
           
            <button onClick={()=>{
                onClickOne()
            }} >Order Processed</button>

            </div>
            <div className="stg_btn">
            <button onClick={()=>{
                onClickTwo()
            }} >Order Design</button>

            </div>
            <div className="stg_btn">
            <button onClick={()=>{
                onClickThree()
            }} >Order Shipped</button>


            </div>
            <div className="stg_btn">
            <button onClick={()=>{
                onClickFour()
            }} >Order En Route</button>


            </div>
            <div className="stg_btn">
            <button onClick={()=>{
                onClickFive()
            }} >Order Arrived</button>

            </div>
        </div>
            </div>

    </div>
);
}
export default TrackOrder