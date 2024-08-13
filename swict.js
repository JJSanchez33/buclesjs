const pagoDinero ="chequw¿e";


switch (pagoDinero) {
    case "targeta":
        console.log("pagaste con targeta")
        
        break;
        case "efectivo":
            console.log("pagaste con efectivo")
            
            break;
            case "bicoin":
                console.log("espera se verificara los fondo")
                
                break;
                case "":
                    console.log("no has ingresado metodo de pago")
                    
                    break;

    default:
        console.log("se presenta alguna anomalia")
        break;
}