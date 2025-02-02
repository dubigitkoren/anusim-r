import { promises as fs } from 'fs';



console.log(process.cwd());
const a = await fs.readFile(process.cwd() + '/Spanish.csv', 'utf8');
const t = a.split('\n');
t.shift();
const line = t[0].split(',');
const first = line[0].indexOf('-');
const day = line[0].substring(0, first);
const second = line[0].indexOf('-', first + 1);
const month = line[0].substring(first + 1, second);
const year = line[0].substring(second + 1);
const theDate = new Date(Number(year), Number(month) - 1, Number(day));
// const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
// console.log(file.substring(0,100));



export default function Home() {
    return (
        <div className="grid  items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <span>Read File</span>
            <p>{t.length} {first} {second} {day} {month} {year} {theDate.toLocaleDateString()}</p>

            <ul>

                {line.map((item, i) => (<li key={i}>{i} {item}</li>))}
            </ul>
            {/* <ul>

        {t.map((item, i) => (<li key={i}>{i} {item}</li>))}
      </ul> */}

        </div>
    );
}
