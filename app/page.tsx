import Image from "next/image"

export default function Home() {
  return (
  <div className="h-svh w-svw flex justify-center items-center bg-slate-900">
    <div className="flex h-[465px] w-11/12">
      <div className="flex flex-col flex-1 gap-4 justify-center px-4">
      <div className="align-middle bg-gray-700 w-11/12 h-14 justify-items-center">
        <h1><b><u>Shaikh Masood Zia</u></b></h1>
        <p>Hi! I am <b>Shaikh Masood Zia.</b> I am a Front-end Developer who is still learning
        about the <b>Web Development</b> and <b>AI</b>.</p>
      </div>
       <div style={{ display: "flex",flexDirection:"row"  , gap:"20px"  }}>
      <div className="bg-blue-700 w-80 h-72 justify-items-center">
        <div><h2><b><u>Skills</u></b></h2></div>
        <ol className="flex flex-col">
         <li>Next.js</li>
        <br/>
        <li>HTML</li>
         <br />
         <li>Good English Conversation</li>
         <br />
         <li>Front-End Development</li>
         <br />
         <li>CSS</li><br />
         <li>Canva</li>
          </ol>
          </div>
          <br />
          
          <div className="bg-purple-700 w-80 h-48 justify-items-center">
           <div><h2><b><u>Contact</u></b></h2>
           <h6><u><b>Gmail:-</b></u></h6><p>shaikhmasoodzia@gmail.com</p>
           <h6><b><u>Phone:-</u></b></h6><p>+92 334116180</p>
           <h6><b><u>LinkedIn</u></b></h6><p>Shaikh Masood Zia</p>
           </div>
           <br />
           
           </div>
           <div className="flex-1">
            <Image className="bg-slate-800"
              src="/Image/masood.jpg"
              alt="masood"
              height="200"
              width="380"
              />
           </div>
      </div>
      <br />
      <div style={{ display: "flex", flexDirection:"row", gap:"20px"  }}>
        <div className="bg-green-600 w-1/3 h-48 justify-items-center">
        <h2><b><u>Education/Courses:-</u></b></h2>
        <ol>
         <h5><b><u>Education:</u></b></h5><li>Matric from "Falconhouse Grammar School</li>
         <h5><b><u>Courses:</u></b></h5><li>Next.js</li>
         <li>HTML</li>
         <li>CSS</li>
        </ol>
        </div>
        <br />
        <div className="bg-slate-500 w-3/6 h-50 justify-items-center">
         <h2><b><u>Experience:-</u></b></h2>
         <ol>
         <li><h5><b><u>HTML:</u></b>2 years</h5></li><br />
         <li><h5><b><u>CSS:</u></b>1/2 years</h5></li><br />
         <li><h5><b><u>Typescript:</u></b>1 years</h5></li><br />
         <li><h5><b><u>Nextjs:</u></b>1/2 year</h5></li><br />
         </ol>
        </div>
      </div>
       </div>
    </div>
    </div> 
  );
}