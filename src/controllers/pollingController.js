const Polling = require('../models/Polling');

module.exports = {
  //# create a polling
  create: async (request, reply) => {
    try {
      const polling = request.body;
      const newPolling = await Polling.create(polling);
      reply.code(201).send(newPolling);
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  //#get the list of polling
  fetch: async (request, reply) => {
    console.log('request ===>',request)

    try {
      const polling = await Polling.find({});
      reply.code(200).send(polling);
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  //#get a single note
  get: async (request, reply) => {
    console.log('request ===>',request.ip)

    try {
      const pollingId = request.params.id;
      const polling = await Polling.findById(pollingId);
      reply.code(200).send(polling);
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  //#update a note
  update: async (request, reply) => {
    try {
      const pollingId = request.params.id;
      const updates = request.body;
      await Polling.findByIdAndUpdate(pollingId, updates);
      const pollingToUpdate = await Polling.findById(pollingId);
      reply.code(200).send({ data: pollingToUpdate });
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  vote: async (request, reply) => {
      console.log('request ===>',request)
      try{
        const pollingId = request.params.id;
        const vote = request.body
          const votes = await Polling.update(
            { _id: pollingId }, 
            { $push: { answers: vote } }
        );
        reply.code(200).send({ data: votes });
      } catch (e) {
        reply.code(500).send(e);
      }
  },

  //#delete a polling
  delete: async (request, reply) => {
    try {
      const pollingId = request.params.id;
      const pollingToDelete = await Polling.findById(pollingId);
      await Polling.findByIdAndDelete(pollingId);
      reply.code(200).send({ data: pollingToDelete });
    } catch (e) {
      reply.code(500).send(e);
    }
  },
};