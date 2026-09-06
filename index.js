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


// RDS(Relational Database Service)
// RDS is managed database service provided by aws simpliying setting up, operating, scaling relational databases. If we setup the db then we need to ec2 instance where OS, db maintenace, backup scripts related task etc we need to manage but with the help of RDS this all things are handled by AWS and it supports DBs such as amazon aurora, postgresql, mysql, mariadb etc


// Lambda functions
// Lamda functions are serverless compute services provided by aws, serverless doesn't means it does not have server. It has server but we do not manage it that's why its termed as serverless. So here developers can host the part of code and remaining things like scaling, descaling, server maintanace etc these all things are taken care by aws itself.
// Examples - 
// Image Processing: The main server handles login and feeds. When a user uploads a photo to Amazon S3, it triggers a Lambda function to create thumbnails and immediately shut down.
// Payment Webhooks: The main server manages the shop and checkout UI. When Stripe completes a payment, Amazon API Gateway triggers a Lambda function to validate the payment, update Amazon DynamoDB, and email a receipt in under 200 ms.
// Scheduled Reports: The main server runs interactive dashboards. At midnight, Amazon EventBridge triggers a Lambda function to query sales data, generate PDF reports, email them, and shut off.  


// API Gateways
// API Gateways acts as a single entry point for applications backend services instead of calling directly lambda functions or backend services, every request will hit the api gateway and this gateway will inspect the requests, apply security checks and route it to appropriate backend service/lambda function.
// Some use cases
// Traffic Control (Throttling & Rate Limiting): Protects your system from being overwhelmed or attacked by automatically limiting how many requests a user can make per second.
// Built-in Caching: Saves and reuses recent responses at the gateway level so your backend functions don't have to re-run for identical requests.
// Custom URLs & Easy Routing: Lets you create clean, professional URLs (like [api.myapp.com/users](https://api.myapp.com/users)) and map different paths to different backend functions from one place.
// Data Transformation: Acts as a translator that modifies request headers, parameters, or data formats before reaching your function—and cleans up the response before returning it to the user.

