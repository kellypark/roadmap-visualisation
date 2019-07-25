var data = {
    'Governance': [
        'Incorporate this technology roadmap into JIRA',
        'Begin to align teams with business capabilities'
    ],
    'Product management': [
        'Make the product roadmap visible to brokers and other customers',
        'Create a broker-facing knowledge base'
    ],
    'Migration from AngularJS to React': [
        'Merge the UI app and BFF repositories',
        'Begin retiring the MyCRM AngularJS code in favour of React',
        'Complete the migration of the MyCRM web app from AngularJS to React'
    ],
    'API surface consolidation & Reporting': [
        'Merge the MyCRM database and API repositories',
        'Bring the MyCRM database under version control using DbUp',
        'Begin migrating to .NET Core',
        'Refactor the MyCRM API to command and request handlers',
        'Introduce WebAPI action filters for exception handling',
        'Change API endpoints (and consuming clients) to return appropriate HTTP response codes',
        'Begin moving stored procedures to C# code',
        'Begin publishing domain events using the mediator pattern',
        'Begin publishing DTO updates to the shared data lake',
        'Complete the migration from .NET Framework to .NET Core',
        'Introduce trunk-based development',
        'Introduce feature toggles',
        'Introduce continuous deployment to production',
        'Retire MS SQL Server in favour of Postgres with Marten as a NoSQL abstraction layer',
        'Introduce structured logging',
        'Introduce application health checks',
        'Introduce production monitoring and alerting',
        'Begin running synthetic transactions against the production environment'
    ],
    'Automated test suite, Infrastructure as code & Hosting Migration': [
        'Begin running end-to-end tests nightly on a newly-provisioned environment',
        'Begin introducing test-driven development (TDD)',
        'Progressively reduce end-to-end test execution time',
        'Begin running end-to-end tests on every build on a newly-provisioned environment',
        'Introduce consumer-driven contract (CDC) tests',
        'Introduce Terraform to provision application-level infrastructure (databases, S3 buckets etc.)',
        'Build Docker images using Docker Compose (and retire Packer and AMIs)',
        'Deploy the MyCRM API to the Kubernetes cluster',
    ],

    'Performance and scalability': [
        'Introduce performance SLAs as code',
        'Begin publishing structured business events (separate to domain events) to Dynamo or Kafka',
        'Introduce event choreography based on structured business events',
        'Introduce websockets to enable client-side applications to respond to business events',
    ],
};

var nodeIndex = 1;
var group = Object.keys(data);
var nodes = [];
var edges = [];

for (var index in group) {
    var groupKey = group[index];
    var groupEntries = data[groupKey];
    for (var i = 0; i < groupEntries.length; i++) {
        nodes.push({ id: nodeIndex, label: groupEntries[i], group: groupKey, x: i * 250, y: index * 200 });
        if (i != groupEntries.length - 1) {
            edges.push({ from: nodeIndex, to: nodeIndex + 1, arrows: 'to' });
        }
        nodeIndex++;
    }
}

var options = {
    nodes: {
        shape: 'box',
        size: 30,
        widthConstraint: { maximum: 250 },
        font: {
            size: 28,
        },
        borderWidth: 2
    },
    edges: {
        width: 2,
        length: 300,
        smooth: {
            type: 'continuous'
        },
        selectionWidth: function (width) { return width * 3; }
    },

    physics: {
        enabled: false
    }
};
