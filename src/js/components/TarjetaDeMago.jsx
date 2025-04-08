import React from "react";
import { useState, useEffect } from "react";

export const TarjetaDeMago = () => {

    const [nombre, setNombre] = useState("")
    const [casa, setCasa] = useState("")
    const [año, setAño] = useState("")
    const [hechizo, setHechizo] = useState("")
    const [alumno, setAlumno] = useState(false)
    

    const registrarAlumno = () => {
        // const datosAlumno = {
        //     nombre,
        //     casa,
        //     año,
        //     hechizo
        // }
        
        // setalumno([...alumno, datosAlumno])

        setNombre("")
        setCasa("")
        setAño("")
        setHechizo("")
        setAlumno(true)
    }


    const cambiarNombre = (e) => {
        setNombre(e.target.value)
        
    }

    // useEffect(() => {

    //     // if (alumno.length > 0) {
    //     //     const ultimo = alumno[alumno.length - 1];
    //     //     alert(`Tenemos un nuevo alumno en Hogwarts! Bienvenido!.`)
    //     // }
    // }, [alumno])

    useEffect(() => {
        if (alumno === true) {
          alert(`Tenemos un nuevo alumno en Hogwarts! Bienvenido!.`);
          setAlumno(false); // Lo volvemos a false para que no se repita el alert
        }
      }, [alumno]);
    


    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSExMVFhUVFxgVFxcYFxUVFRYVGBUWFxUXFxcYHSggGBolGxUXITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGi0fHyUuLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAIDBAYBB//EAD8QAAEDAgQEAwUGBQMEAwEAAAEAAhEDIQQFEjEGQVFhInGBMpGhscEHEyNCUtEUYnLh8KKy8SQzQ5IlNIIV/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAJREAAgICAgICAgMBAAAAAAAAAAECEQMxEiEyQQRRInEjM2ET/9oADAMBAAIRAxEAPwDyRybK69MJhQRcllOao2qQBKwk9MqaVXpqUFQkgkzSuOcmtK4Skow5pXXLgScsAicowpCo1RGJWJEJjCpGoPoxdwDbr2TgZn4YXkGXNuF6lkOcMoUhYud0H1PJLhl+bC10bfGt8BXnuanxFEcdxZWLTFNsRtc/FZLGZ8HES2Dz6K2TNEVFw0SUDz7BvDSdJhFcBjr7E+9HKVQOERY/50Ulk5bM0eCY1sOKrr2fiDgihXBc0aH9W8/MbFeW53kVXDOLXi3I8iOq7IZFJURaaBSSSSqASSSSxhLqSSxjiSSSxhK3lo/Eb5qor2TD8ZnmEJaCjZZ/qDWA/wCWWXxTpdC1/FQEU4WQrDxLlS/NlY6IKys5WPG1Vq5VzJh+IE+TwY4fzMbeSFEIxmzdkJc1cUASBzlE4KUlMldqMOaFLCjYpmhJJhOtUjU0BOapsxIFxdC4kMPauPT2JVAl9mKzlwBEcBk2IriaVF7x1Ahv/sbKd/DGMG+Hqe4H5FVVhpgcK5hMFUqBzmtc5rY1ECYnZGMLwViHsDiWscbBjp1epFgjvDGXVMKXOmHbFu7Tvuffss0Bxa9FbJMiIAdUgdBufVHxRA6KzSpsePC6Hm+k7N8zyCC1sHiC8Bz26TsWEx8p9Ujg1pB4sIVXtDSNUE8438kFqYUG5uRYQAJR/CZVT2L9R7lTYnJxysmUHQeDA+DovkXDR3IC0mFpmLvDvKCEGblZHK/eSo8XlzvzOeQPygwEnFo3Fmi+6IuPch+aZbSxDDTqNmfeD1CzNbF1aXs0yAOkk+8yUdyzNH1ANbHwdiWOkesIroVr7PJeLOGn4R/WmT4Xdu/dAqVJzjDWlxgmACbDc25L3POGU69N1Ko3UDadj0kLL4/MaWWUSzCtirVEBxAeTB3cT0k2j0XbjyWuxHia7fSPMlxFcBw9ia12UiB+p3gb8foqOOwj6VR1N4hzTBG6rZKmQJLq4iASSSSBhInw+ya7B3HzQxGeFac4hg7hCXiFGt4upwWAcwVkap8S2HGNIh7Af0rG1/aK5V5stHRFXCIZC2agQ6si/DQ/ETZv62MFs3JlDgiec7oYFxQ0ZgmU1PKQau4w5oVhihAUrVORhxT2KNPpqb0ZkhC5CeVyEgSfA4d1R7abBLnGAOpXpHDvBVGnD634z/0/+Np9faPn7kD+zTLtdV1X9A0j+p259B81t87qvpU/wokQI636quOKq2UhGy5i9cRTDGxsCY9LbLIZvxIaDtNdrmHkYMH+k7FCMwzvEtrBokkbibAHv6K/V4gP3cVmhwPJwDh7inbOiMktEmAxNTF0nVKTg2mCQXF0PBA2DYN9t+oV/LatZrabKt2us8wNQHci0R257oZT4ZpMqU8QHu0uaKoY0FgBN23BktHS11ab/FOrNlhdRcSNUgltjexne10PZzzk27YUrMJvTBDRIuffvyQLG8Sf+PD0fvNJvUDg2nqH6XHe/MA7Ijnz3CiaQJDXENI56bl0+cR6rKY12jYQOg2jlZVjFMjmzuLqIQp8T1gfxcO4MJuWO+89XNsSfKVpcszCnUYKlJ+puxB3noR+QjoVgcNmBNiimTu0V2kDw1fA8bNM3a6P1AiPVFxVdE8eeTdM9Fp6XAEKLEP2a0AnnsI/dUqOI0A73O3Tlz3lUsbiIZVdDiQJaCROq8E3FvLolO2/so43iSlQfDqhNRp9mm3U8yNyYgb80Ip8ZNMh1KuG7gkB3oQHE/ArPVnFkkglxklx3ceZKpMxsm6dROaWdnoWExrK41MeD5bgjty9U+q6T4gLTyHc+W6yWUOLarKgtJDXRbU0294n5rXVQTIAnaOZid4CSSo6ceTlEyePzLMKriyhQ0DbW6CfME29wKxWfYCtRqxXOp7hq1SXTy3PkvS+JG4oADDOBcSAbCwPOTtC894jyXEUdNSu4PLyRIcXGRyMhUxs5cvffYFSSCSoQOJJJLGOrQcEj/qWeYWeWk4HYTiGwL/2Sz0FGq44dNZv9H1WIq+2VreL3O+/uI8I+qyD/aK5l5stHRHVCM8KiaiD1ijfCftrZn/Gx0Ec+9pDWmyvZ8fFuqAK5IL8QPYPIXQF2EgF1WY6AntXAE8BI2ERClY1NAUzQpyYaEQuaSTAEk2A7nZPKJcMUdWKoiPzT7gT9Ese2aj0/gvKf4bDhpHjd4nf1Hl6CB6KDPaZ1awSY3by7FaLD7IFm5IeedjHmbBdb6R0RoA0cvBa6o8eJ1/LoPcsowGriG0jsHXHadlp86xbqbDPIINwbh9VR1U/4SpzfonldKjb4h+H+7A1ubVg+0B90OQ8QuLKjhaOKpvY5tejVpmWvOk6g0wW6CLW6mVVr4Z1djmN/M6CejQbopgslo4du1zuf3Rhd3QuODlvRLiMMHtc0HxHbeBF5cY2WZzTJ3TpIvE9o7HmrGacX0KLtIItvzPuCG4T7RaUltXDVCwOlrmkOJEfmY/12PoqxkxM+OL0yrQyshy0eUZY8nXps0zcxeIEKk/jvAAO006gMeGKQBJi3tOhvT3odjeKKuPP3QmlTcNLhPjc21iRteduqZyJY8ai7ff+E2KxmLxL3HBvaykwwH6WO+9c2xPiHs8u91d4czZ+INXC4mGYhtiB4Q9pHhcAI2MSB59kfynCMp0msYAAAAAs5xflY1txTCWVWfmaSDHfr5d0vJIu4NKwbmWUuaXNePEPdHUdkMblHRs3nZbjKftGouoiji8O6QINRrW1GPgROkwWEz+WYTanFOWAE02kukww03g3uPatp3Ek9Nk6yKjn4JsD5PlJ1BxHgBkzzjkPgjZpvu4Akja8fH3oFj8+qvk0KWgRbUZi36BbpzOyx+K4vxzHBj3wAQbNaCR0mNt0qfM6IzhjjWz0qtReaRJdpqOHmGzsSY+q8o4sovbUAfifv3XmJhvlePcvSeH8Q2s3UTrmILr28uqw32g5YadcuA8JuO07oYpdkckrRkpXF1cXQREkkksY6th9l9IOxjQehPwWPW0+y8gYmT0KEtGDH2gUwMW4A/kb9Vh3G5Wv4xrB2LqHsPkscT4iuWPnIvHQyoj3CjfEgFUrS8Htn4rZ/wCscWeHxqo0WV3PG+NVmhcsfED2Uw1IhSQmuVbDR1gXSuSuFyFBHgqUFQMUzQlkjEgR/gWnOLB/S1x+Q+qz4Wo+z+nNdx6M+ZH7LY/JGPWMK23ohuPpnWIRTDCyrYkXC62ViYriLLKuIJaNInnMiJ8lYy3hx9Kloa6epiCesLTNwg930Vh8AJOC2xmovYPwWEbSYIsstxRm8amUzeJJ6f3V/ifOTTaWMPiNvIf8LHuYS2TckT8Uk590LOdukZo0/ESd+91FjMVpsB2RR2EMkqvhsDpqa3Ak8rSAjjkm+znaYIOJeHQ+B2Iv69FocqqaHNdHf+4TH5Ca1QubUIDiC8QbwZHJamlkIaNXKIDY6CNSpNKrQIKRsskhzAeyHcT0/DG8q7w/4WhvQKxXph5uNkr0dbX4nkuNoVHEhosBJ8gs/gzUc6wn3Teel58JXq2IyY0y7TJB3mN0HwfDzWPL2UgHHmSYHcCEY8UuzklCV9FPhrEB7SOnXdUs+yYVGOIHiG3r/dbHBZOKfISdyBAXMbggAT/ljKk3XaH4ddmX4CqaaDidvvICt/aXhJoNqDdv+0/3Tczpfcikxgs+oXujuUX4tw/3mB76fiLj5JoyudkmujxhcXVxdxISSSSBjq332S0dWIP9J+iwK9K+xqnNV5HJv1SyCivxwA3F1R5f7QsXN1r+Onn+Lr6t9QH+kLIDdQx7ZaOjlRajhAWJ81lqi1XCY/DJ7FJ8nwHGZs6XqCVJmHtKAlcy0KRJpT01UQw2U0KTSkGo2YdTCmaE1gUoClJhOALbfZrhSXVX8hpb63J+ix1KkXODWglziAANySYAXs3C+SjDUGsPtHxOPVx39OXonwxuVjJBZqr4gqerbkULxGLC6WViXaJ/1CfUWKHZtiwwEkwGgk9gApHYmGRziQsJxnmxLHUxuY1f09PVK3QrfYAxea/fPLpMudIn4AeiKUrsHlCzuKYGsa8jofJFMnxethPMEKMo07EqmEMPhdRhGsLlLeYVTAIzhqiMeikUmT4XLmNuAljxAlXaJVPOIDDOyYNJE+Tgm/VW67CHSs5guJqNOGkyQreO4toADUQNVhJifentUHkjRuohwUH8MByTcqxge0EbHZXnJQUVKlMQgmaMtA52RquYQLNK8X/ydglkCWjNZziHBxI9lsD05oziCHYMno3V6Qg76Zdc85lEaryMJWaOVH90sLshPVHjOJaA5wHUqIp1U3Pmmr0Vo5TiSSSxjq9W+xNo1VSf0gfErylerfY3A+9J6D6pZegoA8cP1Yuuf5z8AAsq3crRcVPnEViNi93zWda66hj0y6GVFr+FR+EfJZGoVs+FW/gnySfK8F+xlsF46p4yuSo8wHjPmkopdKhbOBMKQKRCYYc1OCaE5KwkjVMxQsRHLKUuk7C99pSceTowZyEU8PWZWMvLQTpsACRuOsCfevQ8LxZh3Aaw6mSJuNX+2V5fTqibgEk9Tt69pRRtRj3hwJ8PQmYAn2T36LuhBJUjJs9KpZtQqktp1Wlw3bMO/wDU3VTEUmuMkeoXnuYOE3LXkEBpNnNO0tc0y2DB3CL5VxAXM0PkwJDiZMTpAcefn70ZR+hlIKZzmLaVM38R28l53jKpcQ43kGe9ypMzxlV9YuqAtsdLTtHbkdt1U1SPIn3FcM5vkJJvaLOKotfS0+7z6JmTYZ1PeIdbfaNlFTrFvfsiGEqU3AkWI3CbnyQ/NMLYIonRrQguDqggEIkwooeLDmErJZxh/vaRaDBPNUcNVhNxWdMp+0UwzaAmC4PlxcQSeuxWgwHDjXU9L23BtKzdb7QHB8Ug2NpMfVdrcf13eyWnTuGgSfdumoVJHomBwYpsDBsFOXLE5fx1rb42Oa635XCfQhabD4zW3/JWfQbFi3rP5m8amyJuD7jKM4krJZ9mDQ8U+cif2SMWckkS1HAAm1lVzLF6cPXJ/M2nSHdzgXH4IR//AETWqCm3aYP1VHjXMQQ2k3ZpLjGxd7M+myaCbdHLOdmMqC5TE5y4V3EhLiSSxhL1X7Jx+HUPl8ivK16d9nLgKDzMf8JJegoy+f1PxKn9bvmge6JZq6XOm9yZ9UOYp41SLo4QtzwsfwD5LDPW34YBNA+Sl8rxQy2AcW+apHdJxUeIb+MfMqRySqoQY0pyYE4LMceCuhKjTLnBrRcmB/nJTvwNQVPuoBcIsDPKT5Rb3oKDejWKi0kgDcmAtU2kaFMNlwc4biHDvbcG/wAUMyzAGm4vqtNhaBqE7SYRV+Hd7WoO2sDaeQA59+sK2HHStmIqLXMMk2AO43946avgnYckBzixjhG7bGXOvysYbMW/eMUn6L/m8iLdvIf6ikwENMwQTF2wYs3fSeZ8rqyRvQIzPFeK0g9xI77iRf5qXBYhw8QcNxBLR+UTa2/7J+J8TjDYJNtM3O4gb7/RQ1gWCAQXRvPhadUiCNzMeKeZCzEbLeNzEFoY5sg+JgNy2/ikm4dbbvKouiTpMj4qjqi3dTMK4fkSUn0PE7UsonX5x39FOSqEfemwLQBc+I3JgbCx2HqkxqxXG3SD2SYgAaPUfVaChVXnDMS6i60w3YOsbHY2C2GAx4e0OHNUlFxKRbXTNAKkhQ4vJ6FUD7wGeoJHvVahiURpnUEYMayhRwGGomBTbHluiNDMKAOltNonoP3VijlTX7ojh+H6Ed/NV5MqpyRLgqlMgHSFJWN5CsUsEGiypY6qGhJJiyd7KmLxAAJcYAEleZZ3itdXVF9/Q+z8ET42z6fwKZ39s9uiDYQmo5rYkQAXRBAaIS67OXPydVoqsxP3TTp9sggHpO/ryQ3OCdXpHy+srR4nKmySHEn4IBmWFcCJDvOLK2LJFsi00CSuKV9MhRELrAcSSXQgYS9G4Oof9K53n8l5yvXuAaIOBeT/ADfJJPaCjzTH1PEVUCmxRkkqJqEFSLDStrkDooHyWKcttkdM/wAOfJQ+VpDLZnnvmqT3KmKhZ/3D5lSOclkA4E4Li6lYwXyT8IOxBAOkQ25FzttttCnyAVC99ZzZLyCHEzLSZkAHqZ93RZ7EZqX6KJAaxrtJI6cz05n3lbHA1GHZw0ts0yRtz+S6oRpCLtherTnTABJOmDedREXHYc5i6o5pQgAg6WyQ0QOUNkSQZvMdQVZpOJhwIiAPFYgRBdJ6zYyquPxQq6KVMawHDU3kINpgbuM3Ec+SdFkQ1mPaAHNnSCRe4uGtmdhyHXop2OGlsgwJcbXtJmCbXLdumydWxxEsk7gvmYgbCOjTJsb2VetpqAn2S+zQPEJlpfzkXi/M8rLCuiCjWazURflP6ZuS2LB0gQRESSgWMrwSBv1+EInXwhBDZmOu5J3I/bkg2YUiHSR29fop5LroR9DKZVhjlSpuUrnm3mAT0lcbhboN0WTV37J2Xuouljm3cQASQ0dbnzUeHpaXibgm8p76PtAzLZggcyZHwVljSQOTT6Bmc0Ic8dLW2sinClTUx1M7tuOsFV8TS1hzpLu/WT1VSjUdQqNqcgAD3B3CpSceILe2ahznMN1awmbQbp1NzajA4XBVCvg7rla46Gs1mCzpvVEKedN6rz5lFw5q7QwpO5Kexv8Aozevz1sboNisSal9gh+GwzRC7mONFNhPZB2FzswWaYj/AKh4EQHRPluiWUYgbxvz5KplOHFYOdzc53xlG8lyxtLxVestYN/M9kMtVx+iKbCmFyh9U6gIb1P0VvHZI1rY9o811uMrvhjGkDoLQidLLXMbLiSfWSVzpfSHo82zvIdMuAI7LMYigWm69bxlPU0tMfP/AArE5vk7tZaxhOqCIBXdhy+myEo0ZSVxEsTkmJbd1F4HWLIc5sbiCuu09CiC9Z4ZeG5c/wDpd8l5Mzdeu8P0f/jHu/kefglltBR5W4yFwJz9k1iyLIaV6BkTYwx8vosCVvstthj5fRc3yXoZGUpjxnzKfUF02kPEVI9I9gI2uT5UNNTUxJA2kgItBJsFg2VHaXRG/S/mr2Ny2owxSJbyA6jlHwRbD5aKfjaPDJE7yQNpt22681eymqx5c13KdPUHlH8sST5eq6IKl2ZIyJo4o2L3EQBDd9oaI9Uf4azOnQEAw49fFLpDGl2raZ8gPzIxWwkfiuidg+w1XsSBtAi5nf1QvFZYx8BzYcbhwFuRnt5j+ZMN+wtizTe0AhrS49oaLgmfaHnebXQfH0CDI9kWaLEmD4RIs6/P5oZWweJoFz6Ti9pJvJ1ASQ4ggne4k3hR0s9JIDu1iOfO25ueV7LCBBlcxpvHOTz5m+xi3p3VTN4kgfpEnz5H4Kxhq7ajZ5bAncDqTaRJm/QKhXfLiR3B8tpHeyV9gfYMaL2urzMMY2MEH5KsGTUAiPfy/tKNYSmQLGRB7jYz8kijRmDg3U5pi5A7ckRdRAPK7fiNuXdVaDHQLbe8CbBXK1ARNrO+B7+5OkZFDF0dIttt+3km1sMKoHgJnnsPNTupS03+abTrRDOfkf3Qrsx3JKpon7s+ybjn6I25wN0Mdl5lpA5CP89VdpbKUl32YRbdW6CrX5qZlRJRi4HrOcSYo6SB5IrWrQFRp5UazpO25PQINpGZQ4Owz5bawJce5sAFrv4ZjHF7/E43uY/wLuW0KVFkMAtuesqXCYJ1apP5QYKjllyfQYRpBXLMU8slrQ0cuZU9ag9wl7iG8+pV6q6nTAaBtYDvyVPMap0HlaY3jz7oeuxwLVqUw6GxAMf8qSpjtIs2/ohOUYP7yuOjpHmUcxeXxM8rJYttdCjG4yRcEfELKcTZPTrNc5rQ2oBII2cOhHVFcFjnsfpcLTHorWbU2Fpcx2gOESfZaTa/QJo5HdoVq0eNtF4XrODrBuUu5TTd8Vg884Zr4Yhzm6qbjZ7btv1IWzry3Kj/AEfNelabTImOy7IqlZupuykfwzVAsQVquDqwFGESqMH6VzvJKxkeeuyCqLmFrKFEtwp8j8lYxL2htwuY3/65jaCpZZOTVjwZiaQ8Se8KOmfEU94VHsYhpIzlWVOqA1DZo26kjp2XUk9Wws05c5zWt5RAINojYz8evflWdgYc3QfFz5egMbgFJJXWh/RosPimvEH2RYSBOvdzjIGkNF7RPaVUq0tPjYS3WCACJEbajA3jmOcpJIilLGmGwGaSbSLibWBETYBu5/MYQTF5SwgkyTy7G9w7rskksB6AwrVcNqkamzY/U9D80SwzhVbqiAOcfAJJIehEVMyplr2n+YXmDB5nvdFcHUsCd4I+Y3XUkB1oc6m0F+/iDCNv/wBX5clZoGWu6aTyMWj9ikkstgRQpmJbE3G0/wCc1WbQuXkbWA69lxJZgDWCqhwbJJMxpFmiRzO52+C6xkGIt7+9+i4khJWgo7UplcbTKSSgzHKVOTJVqvitLdIXElF9szK2UYkue6TNwfKJWrwmIFNrB18Z+aSSnN0gwKrMcSdfUkD6n3LuNxeqmSNtgBu49fJJJRb6oYgyoaGtfzadX7/NaY1m1BPJ2/YpJKmNmM7mmVljtQEiIEKtVpA0H03GNQLb9wupItU7FZjMtzythH/w9YfeUjZzTdpaebZ2K1ufhn8DopmWODQOoBIsUkl237/xkHoB5VkLo8FSPVFXZDXj/upJIRin2AE5hk2Jb+eRKtY8ObhoPRdSU8sUmimP2Y0Wck+qupKiVjH/2Q==" className="card-img-top" alt="Mago" />

                <div className="card-body">
                    <label>Nombre:</label>
                    <input
                        type="text"
                        className="nombre-mago"
                        value={nombre}
                        placeholder="Luna Lovegood"
                        onChange={cambiarNombre} />

                    <label>Casa:</label>
                    <input
                        type="text"
                        className="casa-mago"
                        value={casa}
                        placeholder="Ravenclaw"
                        onChange={(e) => setCasa(e.target.value)} />

                    <label>Año Escolar:</label>
                    <input
                        type="text"
                        className="año-mago"
                        value={año}
                        placeholder="Curso 3"
                        onChange={(e) => setAño(e.target.value)} />

                    <label>Hechizo:</label>
                    <input
                        type="text"
                        className="hechizo-mago"
                        value={hechizo}
                        placeholder="Patronus"
                        onChange={(e) => setHechizo(e.target.value)} />

                    <button
                        className="btn registro-mago btn-primary"
                        onClick={() => { registrarAlumno() }}>
                        Registrar Alumno
                    </button>
                </div>
            </div>

        </>
    )
}