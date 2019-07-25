var groups = {
    1: 'Governance',
    2: 'Product management',
    3: 'Migration from AngularJS to React',
    4: 'API surface consolidation',
    5: 'Reporting',
    6: 'Automated test suite',
    7: 'Infrastructure as code',
    8: 'Hosting Migration',
    9: 'Performance and scalability',
    10: 'Continous deployment'
};

var nodes = new vis.DataSet([
    { id: 1, label: 'Incorporate this technology roadmap into JIRA', group: 1},
    { id: 2, label: 'Begin to align teams with business capabilities',  group: 1},
    { id: 3, label: 'Make the product roadmap visible to brokers and other customers', group: 2},
    { id: 4, label: 'Create a broker-facing knowledge base', group: 2},
    { id: 5, label: 'Merge the UI app and BFF repositories', group: 3},
    { id: 6, label: 'Begin retiring the MyCRM AngularJS code in favour of React', group: 3},
    { id: 36, label: 'Complete the migration of the MyCRM web app from AngularJS to React', group: 3 },
    { id: 7, label: 'Merge the MyCRM database and API repositories', group: 4},
    { id: 8, label: 'Bring the MyCRM database under version control using DbUp', group: 4 },
    { id: 14, label: 'Begin migrating to .NET Core', group: 4 },
    { id: 16, label: 'Refactor the MyCRM API to command and request handlers', group: 4 },
    { id: 17, label: 'Introduce WebAPI action filters for exception handling', group: 4 },
    { id: 18, label: 'Change API endpoints (and consuming clients) to return appropriate HTTP response codes', group: 4 },
    { id: 20, label: 'Begin moving stored procedures to C# code', group: 4 },
    { id: 21, label: 'Begin publishing domain events using the mediator pattern', group: 4 },
    { id: 22, label: 'Begin publishing DTO updates to the shared data lake', group: 4 },
    { id: 23, label: 'Complete the migration from .NET Framework to .NET Core', group: 4 },
    { id: 37, label: 'Retire MS SQL Server in favour of Postgres with Marten as a NoSQL abstraction layer', group: 4 },
    { id: 9, label: 'Introduce structured logging', group: 5 },
    { id: 10, label: 'Introduce application health checks', group: 5 },
    { id: 11, label: 'Introduce production monitoring and alerting', group: 5 },
    { id: 13, label: 'Begin running synthetic transactions against the production environment', group: 5 },
    { id: 12, label: 'Begin running end-to-end tests nightly on a newly-provisioned environment', group: 6 },
    { id: 19, label: 'Begin introducing test-driven development (TDD)', group: 6 },
    { id: 26, label: 'Progressively reduce end-to-end test execution time', group: 6 },
    { id: 27, label: 'Begin running end-to-end tests on every build on a newly-provisioned environment', group: 6 },
    { id: 29, label: 'Introduce consumer-driven contract (CDC) tests', group: 6 },
    { id: 15, label: 'Introduce Terraform to provision application-level infrastructure (databases, S3 buckets etc.)', group: 7 },
    { id: 24, label: 'Build Docker images using Docker Compose (and retire Packer and AMIs)', group: 8 },
    { id: 25, label: 'Deploy the MyCRM API to the Kubernetes cluster', group: 8 },
    { id: 28, label: 'Introduce performance SLAs as code', group: 9 },
    { id: 33, label: 'Begin publishing structured business events (separate to domain events) to Dynamo or Kafka', group: 9 },
    { id: 34, label: 'Introduce event choreography based on structured business events', group: 9 },
    { id: 35, label: 'Introduce websockets to enable client-side applications to respond to business events', group: 9 },
    { id: 30, label: 'Introduce trunk-based development', group: 10 },
    { id: 31, label: 'Introduce feature toggles', group: 10 },
    { id: 32, label: 'Introduce continuous deployment to production', group: 10 },
  ]);

  var edges = new vis.DataSet([
    { from: 1, to: 2, arrows:'to'},
    { from: 3, to: 4, arrows:'to' },
    { from: 5, to: 6, arrows:'to' },
    { from: 6, to: 36, arrows:'to' },
    { from: 7, to: 8, arrows:'to' },
    { from: 8, to: 14, arrows:'to' },
    { from: 14, to: 16, arrows:'to' },
    { from: 16, to: 17, arrows:'to' },
    { from: 17, to: 18, arrows:'to' },
    { from: 18, to: 20, arrows:'to' },
    { from: 20, to: 21, arrows:'to' },
    { from: 21, to: 22, arrows:'to' },
    { from: 22, to: 23, arrows:'to' },
    { from: 23, to: 37, arrows:'to' },
    { from: 9, to: 10, arrows:'to' },
    { from: 10, to: 11, arrows:'to' },
    { from: 11, to: 13, arrows:'to' },
    { from: 12, to: 19, arrows:'to' },
    { from: 19, to: 26, arrows:'to' },
    { from: 26, to: 27, arrows:'to' },
    { from: 27, to: 29, arrows:'to' },
    { from: 15, to: 24, arrows:'to' },
    { from: 24, to: 25, arrows:'to' },

    { from: 28, to: 33, arrows:'to' },
    { from: 33, to: 34, arrows:'to' },
    { from: 34, to: 35, arrows:'to' },
    
    { from: 30, to: 31, arrows:'to' },
    { from: 31, to: 32, arrows:'to' },

]);

  

  var options = {
    nodes: {
      shape: 'box',
      size: 30,
      widthConstraint: { maximum: 200 },
      font: {
        size: 28,
      },
      borderWidth: 2
    },
    edges: {
      width: 2,
      length: 500,
      smooth: {
        type: 'continuous'
      },
      selectionWidth: function (width) {return width*3;}
    },
    
  }; 
  