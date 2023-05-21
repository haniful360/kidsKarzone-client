import React from 'react';
import useTitle from '../../hooks/useTitle';


const Blogs = () => {
    useTitle('Blogs')
    return (
        <div className='mb-12 lg:px-0 px-2'>
            <h1 className='text-3xl mt-6 text-center'>Free Quently Ask Questions?</h1>
            <div className="lg:w-[1280px] mx-auto card card-compact bg-base-100 shadow-xl my-12">

                <div className="p-8">
                    <h2 className="card-title">1.What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </h2>
                    <p>Access Token: An access token is a credential that is issued to a client (such as a user or an application) by an authentication server after successful authentication. It represents the client's authorization to access specific resources or perform certain actions. Access tokens typically have an expiration time and are used to authenticate requests made to a server.</p>
                    <p>Refresh Token: A refresh token is a long-lived credential that is also issued to a client along with an access token. Its purpose is to obtain a new access token without having to re-authenticate the user.Refresh tokens are typically used when access tokens expire or become invalid. When the client presents a refresh token, the authentication server validates it and issues a new access token </p>
                    <p>1.The client authenticates with the server using their credentials (e.g., username and password).</p>
                    <p>2.The server verifies the credentials and generates an access token and a refresh token.</p>
                    <p>3.The client stores the access token securely (e.g., in memory or local storage) for subsequent requests to the server.</p>
                    <p>The client also securely stores the refresh token (e.g., in an HTTP-only cookie or secure storage)</p>
                </div>

            </div>
            <div className="lg:w-[1280px] mx-auto card card-compact bg-base-100 shadow-xl mt-4">
                <div className="p-8">
                    <h2 className="card-title">2.Compare SQL and NoSQL databases?
                    </h2>
                    <p>1.Data Model:
                        SQL: SQL databases use a structured data model based on tables with fixed schemas. Data is organized into rows and columns, and relationships between tables are defined using foreign keys.
                        NoSQL: NoSQL databases employ various data models such as key-value, document, columnar, or graph. They offer more flexible schemas, allowing for dynamic and schema-less data.</p> <br />
                    <p>2.
                        Scalability:

                        SQL: SQL databases typically rely on vertical scaling, where hardware upgrades are required to handle increased workload. Some SQL databases support horizontal scaling through sharding or replication, but it can be complex to manage.
                        NoSQL: NoSQL databases are designed for horizontal scalability, allowing data to be distributed across multiple nodes. They can handle large amounts of data and high traffic loads more easily than SQL databases.
                    </p><br />
                    <p>3.Query Language:

                        SQL: SQL databases use the SQL language for querying and manipulating data. SQL provides a standardized syntax for performing complex queries, joins, aggregations, and transactions.
                        NoSQL: NoSQL databases often use their own query languages or APIs specific to their data model. Some NoSQL databases provide a query language similar to SQL, while others may have simpler key-value or document retrieval methods.</p>

                </div>

            </div>
            <div className="lg:w-[1280px] mx-auto card card-compact bg-base-100 shadow-xl mt-4">
                <div className="p-8">
                    <h2 className="card-title">3.What is express js? What is Nest JS ?
                    </h2>
                    <p>
                        Express.js is a minimal and flexible web application framework for Node.js. It provides a set of features and utilities for building web applications and APIs. Express.js simplifies the process of handling HTTP requests, routing, middleware integration, and response handling. It allows developers to create server-side applications using JavaScript or TypeScript and follows a modular approach, enabling the use of third-party libraries and middleware to extend its functionality.</p>
                    <br />
                    <p>

                        Nest.js, on the other hand, is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications. Nest.js leverages TypeScript and is heavily inspired by Angular's architecture and design principles. It provides an opinionated structure and a set of tools to enable developers to create enterprise-grade applications. Nest.js combines the concepts of object-oriented programming, functional programming, and modular architecture to promote code reusability, testability, and maintainability.
                    </p>
                </div>

            </div>
            <div className="lg:w-[1280px] mx-auto card card-compact bg-base-100 shadow-xl mt-4">
                <div className="p-8">
                    <h2 className="card-title">4.What is MongoDB aggregate and how does it work?
                    </h2>
                    <p>
                        In MongoDB, the aggregate function is a powerful method used to perform advanced data aggregation operations on collections. It allows you to process and transform data, perform calculations, and apply various operations to retrieve aggregated results.

                        The aggregate method takes an array of stages as its parameter, where each stage represents a specific operation to be applied to the data. The stages are executed in sequence, passing the results from one stage to the next, similar to a pipeline.</p><br />
                    <p>1.'$match': Filters documents in the collection based on specified conditions, similar to the find method.</p>
                    <p>2.'$project': Specifies which fields to include or exclude from the result and allows transforming the data by adding new fields or manipulating existing ones.</p>
                    <p>3.$group: Groups documents together based on a specified key and applies various operations (e.g., counting, summing, averaging) to the grouped data.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;