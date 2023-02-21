function Application(jobTitle, company, date, status) {
  this.jobTitle = jobTitle;
  this.company = company;
  this.date = date;
  this.status = status;
  allApplications.push(this);
  this.applicationsPerHourArray = [];
}

renderFooter();

let form = document.querySelector(`form`);
console.log(form);

let handleSubmit = function(event) {
  event.preventDefault();
  document.getElementById('footerRow').remove();
  console.log('the form submitted');
  let jobTitle= event.target.location.value;
  let company = parseInt(event.target.min.value);
  let date = parseInt(event.target.date.value);
  let status = parseInt(event.target.status.value);

  let jobApplication = new Application(jobTitle, company, date,status);
  console.log(jobApplication);
  jobApplication.renderTable();
  renderFooter();

};

form.addEventListener('submit', handleSubmit);