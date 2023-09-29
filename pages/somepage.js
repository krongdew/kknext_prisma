import Link from "next/link"
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Layout, Space } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 1200,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};

// ตัวอย่างหน้าที่ใช้ getServerSideProps: pages/somepage.js
export async function getServerSideProps() {
    // ดึงข้อมูลจาก API หรือฐานข้อมูลที่ต้องการ
    const res = await fetch('http://localhost:5000/User')
    const data = await res.json()
    
    return {
      props: {
        data,
      },
    }
  }
  
  function SomePage({ data }) {
    // นำข้อมูลที่ดึงมาแสดงบนหน้า
    return (
        <Space direction="vertical"
        style={{
          width: '100%',
        }}
        size={[0, 48]}>
       
        <Layout>
      <Header style={headerStyle}>Header</Header>
      <Content style={contentStyle}>
      <Container>
      <Grid container spacing={2}>
            {data.user.map(user => (
             <Grid item xs={12} md={4}>
            <Card>
            <CardMedia

                image=""
                title={user.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {user.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {user.email}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Link href={"/user/"+user.id}><Button size="small">
                    Learn More</Button></Link>
            </CardActions>
            </Card>

            
        
            
           
           
            
           </Grid>
          
        ))}
        </Grid> 
        </Container>
      </Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  
      </Space>
    )
  }
  
  export default SomePage
  