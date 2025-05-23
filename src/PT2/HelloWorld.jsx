
export default function HelloWorld(){
    const propsUserCase={
        nama:"Jamal",
        nim:"87838812",
        tanggal:"2025-01-01"
    }
    return (
        <div>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
            <img src="/image/gambar.jpg" alt="Logo" />
            <GreetingRumbai/>
            <QuoteText/>
            <UserCard
            nama="Rojali"
            nim="87878787"
            tanggal={new Date().toLocaleDateString()}/>
        <UserCard {...propsUserCase} /> 
               </div>
    )
}

function GreetingRumbai(){
    return(
        <small> Salam Dari Rumbai </small>
    )
}

function QuoteText() {
    const text = "AIUEOKLNB";
    const text2 = "KLOPNSRQTUYVZ";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function UserCard(props){
    return (
        <div>
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}