function Home(){
  return (
    <Card
      bgcolor:"primary"
      txtcolor="white"
      header="MRP-Capital-BadBank"
      title="Welcome to Bad Banking"
      text="Please use the navigation bar to move around the site."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}
