import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FC',
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  header: {
    marginBottom: 22,
  },
  backButton: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 4,
    marginBottom: 12,
  },
  backText: {
    color: '#2463EB',
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    color: '#172033',
    fontSize: 27,
    fontWeight: '700',
    marginBottom: 7,
  },
  subtitle: {
    color: '#68738A',
    fontSize: 14,
    lineHeight: 21,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 17,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E8ECF4',
  },
  cardTitle: {
    color: '#1E293B',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  cardDescription: {
    color: '#748096',
    fontSize: 13,
    lineHeight: 19,
  },
  footer: {
    color: '#8791A4',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 10,
    marginBottom: 24,
  },
});
