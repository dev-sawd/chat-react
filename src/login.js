import React from "react";
import PCLayout from "./layouts/pcLayout";
import {Button, FormControl, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";

export default function Login() {
    return (
        <PCLayout>
            <div
                style={{
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
            >
                <Typography style={{paddingTop: "20px", fontWeight: "bold", color: 'white'}}
                            variant="h4" component="div" gutterBottom>
                    DEVSAWD CHAT
                </Typography>
                <FormControl sx={{m: 1, minWidth: 80}}>
                    <TextField
                        label="ID"
                        sx={{width: '25ch'}}
                    />
                    <Link key={"main"} to={"/main"} align={'center'} style={{marginTop: "20px", textDecoration: 'none'}}>
                        <Button variant="contained" style={{width:250, height:50 }}
                                onClick={() => {
                                }}>Login</Button>
                    </Link>
                </FormControl>
            </div>
        </PCLayout>
    );
}