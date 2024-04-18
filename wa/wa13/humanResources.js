const workers = {
    "employees": [
        {
            "firstName": "Sam",
            "department": "Tech",
            "designation": "Manager",
            "salary": 40000,
            "raiseEligible": true
        },
        {
            "firstName": "Mary",
            "department": "Finance",
            "designation": "Trainee",
            "salary": 18500,
            "raiseEligible": true
        },
        {
            "firstName": "Bill",
            "department": "HR",
            "designation": "Executive",
            "salary": 21200,
            "raiseEligible": false
        },
    ]

}
console.log("Question 1");
console.log(workers);

const company = {
    "companyName": "Tech Stars",
    "website":"www.techstars.site",
    "employees": workers,
}

console.log("Question 2");
console.log(workers);

company.employees.employees.push({});
company.employees.employees[3].firstName = "Anna";
company.employees.employees[3].department = "Tech";
company.employees.employees[3].designation = "Executive";
company.employees.employees[3].salary = 25600;
company.employees.employees[3].raiseEligible = false;

console.log("Question 3");
console.log(company.employees.employees);

let total = 0
for (x in company.employees.employees) {
    console.log(company.employees.employees[x].salary);
    total += company.employees.employees[x].salary
}
console.log("Question 4");
console.log(total);

function raise() {
    for (x in company.employees.employees) {
        if (company.employees.employees[x].raiseEligible == true) {
            company.employees.employees[x].salary = company.employees.employees[x].salary * 1.1;
            company.employees.employees[x].raiseEligible = false;
        }
    }
}
raise()
console.log("Question 5");
console.log(company.employees.employees)

const array = ["Anna", "Sam"];

for (x in company.employees.employees) { 
    if ((company.employees.employees[x].firstName == "Anna") || (company.employees.employees[x].firstName == "Sam")) {
        company.employees.employees[x].wfh = true;
    }
    else {
        company.employees.employees[x].wfh = false;

    }
}
console.log("Question 6")
console.log(company.employees.employees)