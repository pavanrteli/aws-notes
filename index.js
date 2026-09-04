// Infrastructure as a Service (IaaS)
// IaaS provides raw, on-demand computing resources—such as virtual machines, servers, storage, and networking—over the internet. You manage the operating system, applications, runtime, and data, while the provider manages the physical infrastructure.
// Examples: Amazon Web Services (AWS EC2), Microsoft Azure VMs, Google Compute Engine (GCE).

// Platform as a Service (PaaS)
// PaaS provides a managed framework and environment for developers to build, deploy, and scale applications without worrying about infrastructure setup, OS patching, or hardware maintenance.
// Examples: AWS Elastic Beanstalk, Heroku, Google App Engine.

// Software as a Service (SaaS)
// SaaS delivers fully functional, cloud-hosted software applications directly to end-users via a web browser or client interface. The cloud provider completely manages and maintains the software.
// Examples: Google Workspace (Gmail, Docs), Salesforce, Microsoft 365, Netflix.


// Availability zones - AZ are something where multiple data centers are conneccted with each other similarly there are multiple AZs and even if something happens to one AZ like flood etc then data is replicated to other AZ so users are not impacted.


// IAM = Identity and Access Management

// IAM Users
// • Represents an individual person (developer, tester).
// • Can have username + password (console access).
// • Can have access keys (CLI/SDK access).

// IAM Groups
// • A collection of users with shared permissions.
// • Example:
// • Group: Developers -+ Policy: PowerUserAccess.
// • Group: Viewers -+ Policy: ReadOnlyAccess.

// IAM Roles
// • Temporary identities assumed by users, apps, or AWS services.
// • No perrhanent credentials (keys are short-lived).
// • Best practice for EC2, Lambda, EKS, CI/CD.

// IAM Policies
// • JSON documents defining permissions.


// EC2(Elastic Compute Cloud)
// Amazon EC2 (Elastic Compute Cloud) is a web service provided by Amazon Web Services (AWS) that offers secure, resizable compute capacity in the cloud
// It allows you to rent virtual servers (known as EC2 instances) to run applications without needing to buy, configure, or maintain physical hardware
// Hosting Apps + APIs
// Batch Jobs, scheduled tasks, background workers
// Machine learning
// There are multiple ways to connect to EC2 instance
// 1. EC2 instance connect - from AWS itself
// 2. SSH client - from local to ec2 using git bash...etc
// 3.session manager
// 4. ec2 serial control

// S3(simple storage service)
// S3 is storage service that allows you to store unlimited data and retrive it from anywhere like browser..etc. It stores the files in form of objects inside container called buckets and each bucket is a unique identifier. Most commonly its used in user generated content(uploading picture/pdfs), hosting static websites, secure file handeling.