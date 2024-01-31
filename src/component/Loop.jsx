const Loop = () => {
    const city = ['Dhaka','london','CTG','Kolkata']
    return (
        <div>
            <ul>
                {
                    city.map((item,i)=> {
                        return <li key={i.toString()}>{ item}</li>
                    })
                }
            </ul>
        </div>
    );
};

export default Loop;