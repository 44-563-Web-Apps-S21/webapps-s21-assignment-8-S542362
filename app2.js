const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write('<table>')
      res.write('<tr>')
      res.write('<th>Location</th>') 
      res.write('<th>Hours Spent</th>')
      res.write('<th>Amount paid</th>')
      res.write('</tr>')
      res.write('<tr>')
      res.write('<td>Bangalore</td>')
      res.write('<td>54</td>')
      res.write('<td>$ 400</td>')
      res.write('</tr>')
      res.write('<td>Hyderabad</td>')
      res.write('<td>10</td>')
      res.write('<td>$ 200</td>')
      res.write('</tr>')
      res.write('<tr>')
      res.write('<td>Shimla</td>')
      res.write('<td>57</td>')
      res.write('<td>$ 500</td>')
      res.write('</tr>')
      res.write('<tr>')
      res.write('<td>Kodaicanal</td>')
      res.write('<td>30</td>')
      res.write('<td>$ 700</td>')
      res.write('</tr>')
      res.write('</table>')
      

      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})