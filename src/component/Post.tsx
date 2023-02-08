import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import  { useState } from 'react'
import {Box, Button, Heading, Input, SimpleGrid} from "@chakra-ui/react";
function Post() {
    const [llistName , setLlistName] = React.useState("")
    const [description , setDescription] = React.useState("")
  

const api = "https://63e226a5ad0093bf29c8eb0d.mockapi.io/lab"

const [data,setData]=React. useState<any[]>([]);

    React.useEffect(()=>{
        axios.get('https://63e226a5ad0093bf29c8eb0d.mockapi.io/lab').then(res=>{
            setData(res.data)
        })
    },[])


const navigate = useNavigate()





const PostData = ()=>{
    if(llistName.length >=3 &&description.length>=3 ){
        axios.post(api,{
            llistName,
            description,
           
        }).then(res=>{
           
            console.log(res);
            
        }).then(res=>{
             axios.get("https://63e226a5ad0093bf29c8eb0d.mockapi.io/lab")
        })
    }else{
        alert("Please write correct information")
    }

}




const rem=(id:string)=>{
    axios.delete(`https://63e226a5ad0093bf29c8eb0d.mockapi.io/lab/${id}`).then(res=>{
        setData(data.filter((del)=>{
            return del.id!=id
        }))
    })

}
  return (
  <>
  
 
    <SimpleGrid column={1} justifyContent='center' >
        <Input placeholder='ToDo Name' onChange={e =>{setLlistName(e.target.value)}}></Input>
        <Input placeholder=' Description ' onChange={e =>{setDescription(e.target.value)}}></Input>
      
        <Button onClick={PostData}>Add </Button>
    
    <Box mt={50} >
    

{data.map((item:any)=>

 <li key={item.id}>
{/* <h1>ToDo Name : {item.llistName}</h1>
 <p>Description :  {item.description}</p>  */}


<Box mt= '30px' textAlign="center" border='2px' width ="450px"  bg = "blue.100" rounded='xl' shadow='xl'p={10}>
<Heading> {item.llistName}     
</Heading>

<p>Description :  {item.description}</p> 


 </Box>

<Button onClick={()=>rem(item.id)} bg='red'  >remove</Button>
</li>

)}



    </Box>
   </SimpleGrid> 

   {/* <SimpleGrid justifyContent='center' spacingY={5} mt={2}mb={184}> */}


{/* </SimpleGrid> */}
    
     </>
  )
}

export default Post