export function Contect (){
    return (
        <div className="contect">
           <main>
             <h1>Contect Us</h1>
             <form>
                 <div>
                    <label> Name </label>
                    <input type="text" required placeholder="name"></input>
                 </div>

                 <div>
                    <label> Email </label>
                    <input type="email" required placeholder="example@gmail.com"></input>
                 </div>

                <div>
                    <label> Message </label>
                    <input type="text" required placeholder="Tell us about your query ... "></input>
                </div>

                <button type="submit">Send</button>
             </form>
           </main>
        </div>
    );
}