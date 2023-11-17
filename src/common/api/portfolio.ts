import axios from 'axios';
import type { PortfolioKey } from './types/portfolio';

export const fetchPortfolio = async (key: PortfolioKey) => {
  try {
    const response = await axios.get(`https://api.ato-m-a.me/portfolio/${key}`);
    return response.data.body;
  } catch (err) {
    return null;
  }
}