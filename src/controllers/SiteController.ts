import { RequestHandler } from "express";
import { SiteModel } from "../db/site";

export const getAllSite: RequestHandler = async (req, res) => {
  try {
    const sites = await SiteModel.find();
    res.status(200).json({ data: sites });
  } catch (error) {
    console.error("Error in getAllSite:", error);
    res.sendStatus(400);
  }
};

export const getSite: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const site = await SiteModel.findById(id);
    res.status(200).json({ data: site });
  } catch (error) {
    console.error("Error in getSite:", error);
    res.sendStatus(400);
  }
};

export const createSite: RequestHandler = async (req, res) => {
  try {
    const { name, email, contact } = req.body;
    const site = new SiteModel({ name, email, contact });
    await site.save();
    res.status(201).json({ message: "Site data added", data: site });
  } catch (error) {
    console.error("Error in createSite:", error);
    res.sendStatus(400);
  }
};

export const updateSite: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, contact } = req.body;
    const site = await SiteModel.findById(id);
    if (!site) {
      res.sendStatus(404);
      return;
    }
    site.name = name;
    site.email = email;
    site.contact = contact;
    await site.save();
    res.status(200).json({ message: "Site updated", data: site });
  } catch (error) {
    console.error("Error in updateSite:", error);
    res.sendStatus(400);
  }
};

export const deleteSite: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    await SiteModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Site deleted" });
  } catch (error) {
    console.error("Error in deleteSite:", error);
    res.sendStatus(400);
  }
};
