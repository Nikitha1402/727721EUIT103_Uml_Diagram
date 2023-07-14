import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import './Support.css';



export default function Support() {
    return (
       <div className='sup'>
           
       <div class="wrapper two">
       <div class="neon">
           <h3><center>Available Courses</center></h3>
       </div>
   </div>
      <div className="support-container">
        <Card className="card-item">
          <CardMedia
            sx={{ height: 140 }}
            
            image="https://www.sd.fo/wp-content/uploads/2022/03/machine-learning-computing-concept-modern-technology-machine-learning-computing-concept-modern-technology-102520418.jpg"
            title="machine learning"
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              machine learning
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Machine learning is an area of artificial intelligence and computer science that comprises supervised and unsupervised learning and includes the development of software and algorithms that can make predictions based on data.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">LEARN MORE</Button>
            <Button size="small">REGISTER NOW</Button>
          </CardActions>
        </Card>
        </div>
        <div className="media-container">

  
        <Card className="card-item">
          <CardMedia
            sx={{ height: 140 }}
            image="https://img.freepik.com/free-vector/wireframe-robot-ai-artificial-intelligence-robotic-hand-machine-learning-cyber-mind-domination-concept_127544-852.jpg"
            title="artificial intelligence"
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              artificial intelligence
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">LEARN MORE</Button>
            <Button size="small">REGISTER NOW</Button>
          </CardActions>
        </Card>
        </div>
        <div className="media-container">

  
  
  
        <Card className="card-item">
          <CardMedia
            sx={{ height: 140 }}
            image="https://img.freepik.com/free-vector/neon-cyber-security-concept-with-padlock-circuit_23-2148536303.jpg?w=2000"
            title="cybersecurity"
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              cybersecurity
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">LEARN MORE</Button>
            <Button size="small">REGISTER NOW</Button>
          </CardActions>
        </Card>
        </div>
        <div className="media-container">

  
        <Card className="card-item">
          <CardMedia
            sx={{ height: 140 }}
            image="https://img.freepik.com/free-vector/cloud-services-isometric-composition-with-big-cloud-computing-infrastructure-elements-connected-with-dashed-lines-vector-illustration_1284-30495.jpg?w=2000"
            title="cloud computing"
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Cloud Computing
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Cloud computing enables customers to use infrastructure and applications via the internet, without installing and maintaining them on-premises.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">LEARN MORE</Button>
            <Button size="small">REGISTER NOW</Button>
          </CardActions>
        </Card>
        </div>
        <div className="media-container">

  
  
        <Card className="card-item">
          <CardMedia
            sx={{ height: 140 }}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1vsVMvwyeHIizht3WUky00fkD8I9-bQcW2wksxvcArdv02F8zMH_YpDC5j17M6gi-Lx0&usqp=CAU"
            title="artificial intelligence"
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Big Data
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Big data primarily refers to data sets that are too large or complex to be dealt with by traditional data-processing application software. 
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">LEARN MORE</Button>
            <Button size="small">REGISTER NOW</Button>
          </CardActions>
        </Card>
  
        <br></br>
  
        
  </div>
  </div>
  
  );
  }
  