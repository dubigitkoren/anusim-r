
import { getSpainRecords, createTblSpainRecord } from "@/lib/actions/spain.actions"
import { promises as fs } from 'fs';



console.log(process.cwd());
const a = await fs.readFile(process.cwd() + '/Spanish.csv', 'utf8');
const t = a.split('\n');
t.shift();
for (let i = 0; i < t.length; i++) {
    if (i == 12) break;

    const line = t[i].split(',');
    const first = line[0].indexOf('-');
    let day = line[0].substring(0, first);
    if (day.length == 1)
        day = '0' + day;
    const second = line[0].indexOf('-', first + 1);
    let month = line[0].substring(first + 1, second);
    if (month.length == 1)
        month = '0' + month;
    const year = line[0].substring(second + 1);
    const final = year + '-' + month + '-' + day;
    const theDate = new Date(final);

    console.log(i, line[0], day, month, year, theDate);

    const d: CreateTblSpainParam = {
        DateOfAuto: theDate,
        Tribunal: line[1].replaceAll('$', ','),
        TypeOfAuto: line[2].replaceAll('$', ','),
        Name: line[3].replaceAll('$', ','),
        Surname: line[4].replaceAll('$', ','),
        Aliases: line[5].replaceAll('$', ','),
        LocationOfBirth: line[6].replaceAll('$', ','),
        BishopricOfBirth: line[7].replaceAll('$', ','),
        Residence: line[8].replaceAll('$', ','),
        BishopricOfResidence: line[9].replaceAll('$', ','),
        Sex: line[10].replaceAll('$', ','),
        Age: Number(line[11]),
        PersonalStatus: line[12].replaceAll('$', ','),
        Occupation: line[13].replaceAll('$', ','),
        FamilyTies: line[14].replaceAll('$', ','),
        TypeOfCrime: line[15].replaceAll('$', ','),
        Sentence: line[16].replaceAll('$', ','),
        Punishment: line[17].replaceAll('$', ','),
        AdditionalInformation: line[18].replaceAll('$', ','),
    }

    const newAppointment = await createTblSpainRecord(d);
    console.log(newAppointment);

}




export default function Home() {
    return (
        <div className="grid  justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h1>Create Data</h1>
            <h2>{t.length} </h2>

            <ul>


            </ul>
            {/* <ul>

        {t.map((item, i) => (<li key={i}>{i} {item}</li>))}
      </ul> */}

        </div>
    );
}
