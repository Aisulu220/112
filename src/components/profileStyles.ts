
import { StyleSheet } from 'react-native';

export const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  content: {
    paddingBottom: 25,
  },

  avatar: {
    width: 95,
    height: 95,
    borderRadius: 50,
    backgroundColor: '#CBD8FF',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 3,
    borderColor: '#E7EDFF',
  },

  avatarText: {
    fontSize: 29,
    fontWeight: '700',
    color: '#365FF5',
  },

  name: {
    fontSize: 17,
    fontWeight: '700',
    color: '#202A43',
    textAlign: 'center',
    marginTop: 8,
  },

  label: {
    fontSize: 12,
    fontWeight: '600',
    color: '#34446D',
    marginBottom: 7,
    marginTop: 17,
  },

  input: {
    height: 43,
    backgroundColor: '#EDF1FF',
    borderRadius: 12,
    paddingHorizontal: 14,
    fontSize: 13,
    color: '#34446D',
  },

  primaryButton: {
    height: 45,
    backgroundColor: '#365FF5',
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#365FF5',
    marginHorizontal: 18,
    marginTop: 22,
    marginBottom: 12,
  },

  description: {
    fontSize: 12,
    color: '#6B7590',
    lineHeight: 20,
    marginHorizontal: 18,
  },

  card: {
    backgroundColor: '#F1F4FF',
    marginHorizontal: 17,
    padding: 14,
    borderRadius: 15,
    marginBottom: 12,
  },

  separator: {
    height: 1,
    backgroundColor: '#EEF1FA',
    marginHorizontal: 17,
  },
});
