const { db } = require('../util/admin');

exports.getAllJobPostings = (request, response) => {
	db
        .collection('jobPost')
		.orderBy('createdAt', 'desc')
		.get()
		.then((data) => {
			let jobPost = [];
			data.forEach((doc) => {
				jobPost.push({
                    jobPostId: doc.id,
                    jobTitle: doc.data().jobTitle,
                    jobDescription:doc.data().jobDescription,
                    companyName : doc.data().companyName,
					createdAt: doc.data().createdAt,
                    jobReferrerUserName: doc.data().jobReferrerUserName,
                    jobReferrerEmailId: doc.data().jobReferrerEmailId,
                    jobLocation: doc.data().jobLocation,
                    tags:doc.data().tags,
                    imageSrc: doc.data().imageSrc
				});
			});
			return response.json(jobPost);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code});
		});
};



exports.postOneJob = (request, response) => {
	if (request.body.body === '') {
		return response.status(400).json({ body: 'Must not be empty' });
    }
    
    if(request.body.jobTitle === '') {
        return response.status(400).json({ jobTitle: 'Must not be empty' });
    }
    
    const newJobPostItem = {
        jobTitle: request.body.jobTitle,
        jobDescription : request.body.jobDescription,
        companyName : request.body.companyName,
        jobReferrerUserName: request.body.jobReferrerUserName,
        jobReferrerEmailId: request.body.jobReferrerEmailId,
        createdAt: new Date().toISOString(),
        jobLocation : request.body.jobLocation,
        tags: request.body.tags,
        imageSrc : request.body.imageSrc
    }

    db
        .collection('jobPost')
        .add(newJobPostItem)
        .then((doc)=>{
            const responseJobPostItem = newJobPostItem;
            responseJobPostItem.id = doc.id;
            return response.json(responseJobPostItem);
        })
        .catch((error) => {
            console.error(error);
			response.status(500).json({ error: 'Something went wrong' });
		});
};

