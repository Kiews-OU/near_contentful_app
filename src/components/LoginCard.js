import { Button, TextInput } from "@contentful/f36-components"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { LoadAcc, login } from "../locations/utils"
// import { useHistory } from "react-router-dom";



export const LoginCard = ({sdk}) => {
    // const history = useHistory();
    let dispatch = useDispatch()
    let walletData = useSelector((state) => state.wallet)
    // console.log(walletData);
    useEffect(()=>{LoadAcc()},[])
    return (
        <div style={{
            width: "300px", border: "1px solid gray", height: "500px", borderRadius: "16px",
            display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"
        }}>
            <div>
                <h1>Near App</h1>
            </div>
            <div style={{ marginTop: "16px" }}>
                <TextInput
                    onChange={(e) => { dispatch({ type: "idChange", value: e.target.value }) }}
                    placeholder="Enter Your Current ID" />
            </div>
            <div style={{ marginTop: "16px" }}>
                <Button onClick={()=>{
                    login({sdk})
                }} >
                    Login
                </Button>
            </div>
        </div>
    )
}